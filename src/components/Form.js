import "./FormStyles.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_erho79f",
        "template_w8pc79o",
        form.current,
        "XvTDIOFj8IDhkXcKc"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <button type="submit" className="btn" value="Send">Submit</button>
      </form>
      </div>
  );

//   function sut() {
//     alert("form submit succfully");
//   }
};

export default Contact;