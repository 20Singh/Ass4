import React from 'react'
import { iconName } from "react-icons/";
const ContactUs = () => {

    let name = "@Kritika Singh"
    return (
        < div className="contact">
            <h1>Contact Us</h1>
            <div className='cont' >
                <br />
                <br />
                <div>
                    📞   Phone Number: <a href="tel:+91-6393328066">+91 6393328066</a>
                    <br />
                    <br />
                    📧 E-Mail: <a href="mailto :kritikasingh2315@gmail.com">kritikasingh2315@gmail.com</a>
                    <br /><br />
                    <h3 >{name}</h3>
                </div>
            </div>
        </div>
    )

}

export default ContactUs;