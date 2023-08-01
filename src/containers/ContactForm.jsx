import React , { useRef } from "react";
import Button from "../components/resuable/Button";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";


const ContactForm = () => {
  const form = useRef();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data, "dataa");
    emailjs
      .sendForm(
        "arp2ctaula@gmail.com",
        "template_dzfhj49",
        form.current,
        "Unqp85GFUIxYDzLLU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log("errorrrr", error.text);
        }
      );
    reset();
  };

  return (
    <div className="contact_form">
      <div className="contact_form__head">Contact Form</div>
      <form className="contact_form__form" ref={form} onSubmit={handleSubmit(onSubmit)}>
        <label>Full Name</label>
        <input type="text" placeholder="Your Name" {...register("fullname", { required: true, maxLength: 20 })}/>
        {errors.fullname?.type === "required" && (
            <p className="err">Name is required</p>
          )}
        {errors.fullname?.type === "maxLength" && (
            <p className="err">Seems like invalid</p>
          )}
        <label>Email</label>
        <input type="email" placeholder="Your Email"{...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}/>
          {errors.email?.type === "required" && (
            <p className="err">Email is required</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="err">You must follow proper email pattern</p>
          )}
        <label>Subject</label>
        <input type="text" placeholder="Subject" {...register("Subject", { required: true, maxLength: 60 })}></input>
        {errors.email?.type === "required" && (
          <p className="err">Subject is required</p>
        )}
        {errors.email?.type === "maxLength" && (
          <p className="err">Please make it little bit short.</p>
        )}
        <label>Message</label>
        <textarea rows={10} cols={20} {...register("message", { required: true, maxLength: 2000 })}></textarea>
        {errors.email?.type === "required" && (
          <p className="err">Message is required</p>
        )}
        {errors.email?.type === "maxLength" && (
          <p className="err">Message shouldn't be this long..</p>
        )}
        <Button btn="btnlg" title="Send Request" />
      </form>
    </div>
  );
};

export default ContactForm;
