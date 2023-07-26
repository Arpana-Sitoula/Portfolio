import React, { useRef } from "react";
import { projects } from "../assets/projects.json";
import Dropdown from "../components/resuable/Dropdown";
import Button from "../components/resuable/Button";
import { VscChromeClose } from "react-icons/vsc";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const HireMeModel = ({ setHireModel }) => {
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
      description: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data, "dataa");
    emailjs
      .sendForm(
        "arp2ctaula@gmail.com",
        "template_42e7emp",
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
    <div className="overlay">
      <form className="  hireme" ref={form} onSubmit={handleSubmit(onSubmit)}>
        <div className="cancel" onClick={() => setHireModel(false)}>
          <VscChromeClose />
        </div>
        <div className="hireme__title">What Project are you looking for?</div>
        <div className="linelight"></div>
        <div className="hireme__label">
          <input
            type="text"
            placeholder="Name"
            {...register("fullname", { required: true, maxLength: 20 })}
          />
          {errors.fullname?.type === "required" && (
            <p className="err">Name is required</p>
          )}
          {errors.fullname?.type === "maxLength" && (
            <p className="err">Seems like invalid</p>
          )}
          <input
            type="text"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
          />
          {errors.email?.type === "required" && (
            <p className="err">Email is required</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="err">You must follow proper email pattern</p>
          )}
        </div>
        <Dropdown projects={projects} filter={null} setFilter={() => null} />
        <textarea
          style={{ height: "150px" }}
          placeholder="Project description"
          {...register("description", { required: true, maxLength: 200 })}
        />
        {errors.email?.type === "required" && (
          <p className="err">Description is required</p>
        )}
        {errors.email?.type === "maxLength" && (
          <p className="err">Please make it little bit short.</p>
        )}
        <Button title="Send Request" btn="btnlg" />
        <div className="hireme__closebtn">
          <Button
            title="Close"
            btn="closebtn"
            onClick={() => setHireModel(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default HireMeModel;
