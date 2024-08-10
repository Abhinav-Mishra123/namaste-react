import UserClass from "./UserClass";

const Contact = () =>{
    return(
        <>
            <section>
                <div className="about-section">
                    <h1>This is Contact us page</h1>
                </div>
                <UserClass name="first" location="india"/>
                <UserClass name="second" location="india"/>

            </section>
        </>
    )
}

export default Contact;