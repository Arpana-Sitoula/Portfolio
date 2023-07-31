import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import ContactForm from "../containers/ContactForm";
import Sidedata from "../containers/Sidedata";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className="contact">
        <ContactForm />
        <Sidedata />
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
