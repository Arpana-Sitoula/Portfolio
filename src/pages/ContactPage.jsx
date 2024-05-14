import React, {useContext} from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import ContactForm from "../containers/ContactForm";
import Sidedata from "../containers/Sidedata";
import { ThemeContext } from "../context/themeContext";

const ContactPage = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <Navbar />
      <div className={`contact ${theme}`}>
        <ContactForm />
        <Sidedata />
      </div>
      <div className={`line${theme}`}></div>
      <div className="home__foot">
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
