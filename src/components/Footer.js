import React, {useState}from 'react';
import './Footer.css'
import emailjs from 'emailjs-com'

function Footer (){

    function sendEmail(e) {

        e.preventDefault();
       
        console.log(e.target);
    
        emailjs.sendForm('service_usbdvjn', 'template_qv3pb9m', e.target,'user_8VDppICCPQa1gaPewCB2d')
        .then((result) => {
            console.log(result.text);
            alert("We received your message. We will connect you within 24 hours, Thank you")
        }, (error) => {
            console.log(error.text);
            alert("Issue with submiting. Please try again.")
        });
    }
    console.log(message)
    return(
      
        <div className="footer">
            <div className="footer-container">
                <h1>Get in touch</h1>
                
                <div className="social">
                <a href="/"><i className="fa fa-linkedin"></i></a>
                <a href="/"><i className="fa fa-github"></i></a>
                <a href="/"><i className="fa fa-twitter"></i></a>
                <a href="/"><i className="fa fa-stack-overflow"></i></a>
                <a href="/"><i className="fa fa-facebook"></i></a>
                </div>

                <div className="contact-container">
                    <div className="contact">
                        <p className="con">Call : (+94)777979805</p>
                        <p className="con">Mail : shibly2016@gmail.com</p>
                    </div>
                    <div className="form">
                        <h2 className="form-head">Send a message</h2>
                        <form onSubmit={sendEmail}>

                            <label >Subject</label>
                            <input type="text" name="subject" id="subject"></input>

                            <label >Name</label>
                            <input type="text" name="from_name" id="name"></input>

                            <label >Message</label>
                            <textarea  rows="3" cols="4" name="message" id="message" required></textarea>

                            <label>Email</label>
                            <input type="email" name="email" id="email" placeholder="  Your E-mail" required></input>

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer