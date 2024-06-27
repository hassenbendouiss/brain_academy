import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/email-icon.png'
import phone_icon from '../../assets/icons-phone.png'
import location_icon from '../../assets/icon-location.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7eda9b5e-49bb-4712-b0dd-1028512ebf14");

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
            <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
            <p>We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out. Our team is here to assist you with anything you need. Drop us a message, and we’ll get back to you as soon as possible. Your satisfaction is our priority.</p>
        <ul>
            <li> <img src={msg_icon} alt="" />hassen.bendouiissa@gmail.com</li>
            <li > <img src={phone_icon} alt="" />2695979</li>
            <li > <img src={location_icon} alt=""/>Khsma soussa tunisia</li>
        </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label >Your name</label>
            <input type="text" name='name' placeholder='Entre your name' required/>
            <label >Your mobile Number</label>
            <input type="tel" name='phone' placeholder='Entre your mobile number' required />
            <label >Write your messages here</label>
            <textarea name="message" rows={6} placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /> </button>
          </form>
          <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
