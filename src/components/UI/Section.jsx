const Section = (props) => {
  return (
    <section className="section border-black border-t-[0px] w-[100vw]">
        {props.children}
    </section>
  )
}

export default Section