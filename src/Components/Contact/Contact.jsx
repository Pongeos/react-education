import React from 'react'
import './Contact.css'
import { FaEnvelope, FaPhoneVolume, FaLocationDot, FaArrowRightLong } from "react-icons/fa6";
import msg from '../../assets/msg-icon.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "9b7c7756-f9b0-4996-8d65-c2193b6d695e");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg} alt="" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li><FaEnvelope />Contact@React.dev</li>
                    <li><FaPhoneVolume />+1 123-456-7890</li>
                    <li><FaLocationDot />77 Massachusetts Ave, Cambridge <br /> MA 02139, United States</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type="text" placeholder='Enter your name' />
                    <label>Phone Number</label>
                    <input type="tel" placeholder='Enter your mobile number' />
                    <label>Your Email</label>
                    <input type="email" placeholder='Enter your email id' />
                    <label>Write your messages here</label>
                    <textarea name="messages" rows="6" placeholder='Enter your messages'></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now<FaArrowRightLong /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact