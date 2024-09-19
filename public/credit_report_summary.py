import pandas as pd
import requests
import time
import uuid

from typing import Dict, List, Union

INPUT_FILE = ""  # input csv url or path
OUTPUT_FILE = ""  # ouput csv path

URL = "https://in.decentro.tech/v2/financial_services/credit_bureau/credit_report/summary"
HEADERS = {
    'client_id': '',
    'client_secret': '',
    'module_secret': '',
    'provider_secret': ''
}


def main():

    input_dataframe = pd.read_csv(INPUT_FILE)
    output_dataframe = pd.DataFrame(columns=[
        "dateOfBirth", "gender", "age", "totalIncome", "occupation", "pan", "aadhaar", "passport", "voterID", "drivingLicense", "rationCard",
        "addressSequence1", "addressSequence2", "addressSequence3", "phoneSequence1", "phoneSequence2", "phoneSequence3", "emailAddress",
        "noOfAccounts", "noOfActiveAccounts", "noOfWriteOffs", "totalPastDue", "mostSevereStatusWithIn24Months", "singleHighestCredit", "singleHighestSanctionAmount",
        "totalHighCredit", "averageOpenBalance", "singleHighestBalance", "noOfPastDueAccounts", "noOfZeroBalanceAccounts",
        "recentAccount", "oldestAccount", "totalBalanceAmount", "totalSanctionAmount", "totalCreditLimit",
        "totalMonthlyPaymentAmount","ERSScoreValue","ageOfOldestTrade","numberOfOpenTrades",
        "accountsDeliquent", "accountsOpened", "totalInquiries", "status", "remarks"
    ])
    index = 0

    for _, row in input_dataframe.iterrows():

        name = str(row.customer_name).strip()
        mobile_number = str(row.mobile).strip()

        if not name and not mobile_number:
            continue

        print(name, mobile_number)

        response = execute_customer_credit_report(name=name, mobile_number=mobile_number)
        report_data = parse_credit_report_data(response=response)

        time.sleep(1)

        output_dataframe.loc[index] = report_data
        index += 1

        output_dataframe.to_csv(OUTPUT_FILE)


def execute_customer_credit_report(name: str, mobile_number: str) -> dict:

    url = str(URL)

    payload = {
        "reference_id": str(uuid.uuid4()),
        "consent": True,
        "consent_purpose": "For getting customer data",
        "name": name,
        "mobile": mobile_number,
        "inquiry_purpose": "PL"
    }
    headers = dict(HEADERS)

    http_response = requests.post(url, headers=headers, json=payload)

    try:
        response = http_response.json()
    except Exception:
        response = None
        print(f"Response parsing failed for customer: {name} | {mobile_number}")

    return response

def parse_credit_report_data(response: dict) -> dict:

    status: str = response.get("status")
    remarks: str = response.get("message")
    data: Union[List[Dict], Dict] = response.get("data", {}).get("cCRResponse", {}).get("cIRReportDataLst", [])

    if not data:
        return {
            "status": status,
            "remarks": remarks
        }

    if isinstance(data, list):
        data = data[0]

    error: Dict = data.get('error', {})

    if error:
        return {
            "status": status,
            "remarks": error.get("errorDesc") or remarks
        }

    report_data: Dict = data.get("cIRReportData", {})

    id_and_contact_info: report_data = report_data.get("iDAndContactInfo", {})
    personal_info: Dict = id_and_contact_info.get("personalInfo", {})
    identity_info: Dict = id_and_contact_info.get("identityInfo", {})
    address_infos: List[Dict] = id_and_contact_info.get("addressInfo", [])[:3]  # atmost 3
    phone_infos: List[Dict] = id_and_contact_info.get("phoneInfo", [])[:3]  # atmost 3
    email_infos: List[Dict] = id_and_contact_info.get("emailInfo", [])[:2]  # atmost 3

    age: Union[str, Dict] = personal_info.get("age", {})
    if isinstance(age, dict):
        age = age.get("age")

    filter_response = {
        "remarks": remarks,
        "status": status,
        "dateOfBirth": personal_info.get("dob"),
        "gender": personal_info.get("gender"),
        "age": age,
        "totalIncome": personal_info.get("totalIncome"),
        "occupation": personal_info.get("occupation")
    }

    for key, search_key in [
        ("pan", "pANId"),
        ("aadhaar", "nationalIDCard"),
        ("passport", "passport"),
        ("voterID", "voterID"),
        ("drivingLicense", "driverLicense"),
        ("rationCard", "rationCard")
    ]:

        id_details: Union[Dict, List[Dict]] = identity_info.get(search_key)

        if id_details:

            if isinstance(id_details, list):
                filter_response[key] = id_details[0].get("idNumber")

            if isinstance(id_details, dict):
                filter_response[key] = id_details.get("idNumber")


    for index, address_info in enumerate(address_infos):

        key = f"addressSequence{index + 1}"
        filter_response[key] = address_info.get("address")


    for index, phone_info in enumerate(phone_infos):

        key = f"phoneSequence{index + 1}"
        filter_response[key] = phone_info.get("number")

    for index, email_info in enumerate(email_infos):

        key = f"emailAddressSequence{index + 1}"
        filter_response[key] = email_info.get("emailAddress")

    retail_accounts_summary: Dict = report_data.get("retailAccountsSummary", {})

    filter_response.update({
        "noOfAccounts": retail_accounts_summary.get("noOfAccounts"),
        "noOfActiveAccounts": retail_accounts_summary.get("noOfActiveAccounts"),
        "noOfWriteOffs": retail_accounts_summary.get("noOfWriteOffs"),
        "totalPastDue": retail_accounts_summary.get("totalPastDue"),
        "mostSevereStatusWithIn24Months": retail_accounts_summary.get("mostSevereStatusWithIn24Months"),
        "singleHighestCredit": retail_accounts_summary.get("singleHighestCredit"),
        "singleHighestSanctionAmount": retail_accounts_summary.get("singleHighestSanctionAmount"),
        "totalHighCredit": retail_accounts_summary.get("totalHighCredit"),
        "averageOpenBalance": retail_accounts_summary.get("averageOpenBalance"),
        "singleHighestBalance": retail_accounts_summary.get("singleHighestBalance"),
        "noOfPastDueAccounts": retail_accounts_summary.get("noOfPastDueAccounts"),
        "noOfZeroBalanceAccounts": retail_accounts_summary.get("noOfZeroBalanceAccounts"),
        "recentAccount": retail_accounts_summary.get("recentAccount"),
        "oldestAccount": retail_accounts_summary.get("oldestAccount"),
        "totalBalanceAmount": retail_accounts_summary.get("totalBalanceAmount"),
        "totalSanctionAmount": retail_accounts_summary.get("totalSanctionAmount"),
        "totalCreditLimit": retail_accounts_summary.get("totalCreditLimit"),
        "totalMonthlyPaymentAmount": retail_accounts_summary.get("totalMonthlyPaymentAmount")
    })

    score_details: Union[List[Dict], Dict] = report_data.get("scoreDetails", [])
    if isinstance(score_details, list):
        score_details = score_details[0]

    filter_response.update({
        "ERSScoreValue": score_details.get("value")
    })

    other_key_ind: Dict = report_data.get("otherKeyInd", {})

    filter_response.update({
        "ageOfOldestTrade": other_key_ind.get("ageOfOldestTrade"),
        "numberOfOpenTrades": other_key_ind.get("numberOfOpenTrades")
    })

    recent_activities: Dict = report_data.get("recentActivities", {})

    filter_response.update({
        "accountsDeliquent": recent_activities.get("accountsDeliquent"),
        "accountsOpened": recent_activities.get("accountsOpened"),
        "totalInquiries": recent_activities.get("totalInquiries")
    })

    return filter_response

if __name__ == '__main__':
    main()
