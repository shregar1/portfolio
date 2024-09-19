import "./Button.css";

const Button = (props) => {
    const title = props.title
  return (
    <button
      type="button"
      onClick={props.onClick}
      className="button py-2.5 px-5 text-sm font-medium text-white bg-[#797ffc] rounded-full hover:bg-[#7d83fb] hover:text-blue-70"
    >
      {title}
    </button>
  );
};

export default Button;
