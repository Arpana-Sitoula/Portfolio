import React from "react";
import Button from "../components/resuable/Button";

const ContactForm = () => {
  return (
    <div className="contact_form">
      <div className="contact_form__head">Contact Form</div>
      <form className="contact_form__form">
        <label>Full Name</label>
        <input type="text" placeholder="Your Name"></input>
        <label>Email</label>
        <input type="email" placeholder="Your Email"></input>
        <label>Subject</label>
        <input type="text" placeholder="Subject"></input>
        <label>Message</label>
        <textarea rows={10} cols={20}></textarea>
        <Button btn="btnlg" title="Send Request" />
      </form>
    </div>
  );
};

export default ContactForm;
