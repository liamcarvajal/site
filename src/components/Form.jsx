//import React from 'react'
import "./Components.css";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

function Form() {
  const setError = (inputRef) => {
    if (inputRef.current.parentElement.classList.contains("success")) {
      inputRef.current.parentElement.classList.remove("success");
    } else {
      inputRef.current.parentElement.classList.add("error");
    }
  };

  const setSuccess = (inputRef) => {
    if (inputRef.current.parentElement.classList.contains("error")) {
      inputRef.current.parentElement.classList.remove("error");
    } else {
      inputRef.current.parentElement.classList.add("success");
    }
  };

  const [validInput, setValidInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValidInput((preValue) => {
      return { ...preValue, [name]: value };
    });
  };

  const showMessage = (message, updateColor) => {
    const divContent = document.createElement("div");
    divContent.textContent = message;
    divContent.classList.add("div-content");
    divContent.style.backgroundColor = updateColor;

    setTimeout(() => {
      divContent.classList.add("hide");
      divContent.addEventListener("transitionend", () => {
        divContent.remove();
      });
      divContent.style.transform = `translateX(${"0"}%)`;
      // MessageRef.current.style.visibility = 'visible'
      emailRef.current.parentElement.classList.remove("error");
      TextAreaRef.current.parentElement.classList.remove("error");
      emailRef.current.parentElement.classList.remove("success");
      TextAreaRef.current.parentElement.classList.remove("success");
    }, 5000);
  };

  const emailRef = useRef(null);
  const TextAreaRef = useRef(null);
  const form = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, message } = validInput;
    // const pattern = /^[^]+@[^]+\.[a-z]{2,3}$/
    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!email && !message) {
      setError(emailRef);
      setError(TextAreaRef);
      showMessage("Pls! fill in the required inputs");
    } else if (!email && message) {
      setError(emailRef);

      showMessage("Ooops! Email can't be empty");
    } else if (!email.match(pattern)) {
      setError(emailRef);
      showMessage("Ooops! Email not valid");
    } else if (!message && email.match(pattern)) {
      setError(TextAreaRef);

      showMessage("Leave a message pls!");
    } else if (email && !message) {
      setError(TextAreaRef);
      showMessage("por favor! enviar un mensaje");
    } else if (email && message) {
      emailjs.sendForm(
        "service_zj3k8zk",
        "template_94cfvto",
        form.current,
        "p2LO76xGF9IwBRfuc"
      );
      setSuccess(emailRef);
      setSuccess(TextAreaRef);
      showMessage("Message sent successfully", "green");

      setValidInput({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <form className="outer-form" ref={form} onSubmit={onSubmit}>
      <div className="form">
        <input
          className="email"
          ref={emailRef}
          placeholder="Email"
          name="email"
          value={validInput.email}
          onChange={handleChange}
        />
        <input
          className="name"
          placeholder="Name"
          name="name"
          value={validInput.name}
          onChange={handleChange}
        />
        <textarea
          className="message"
          ref={TextAreaRef}
          placeholder="Type your message here..."
          name="message"
          value={validInput.message}
          onChange={handleChange}
        />
        <button className="button" type="submit">
          <span className="button-text"> [ SEND ] </span>
          <span className="button-text foreground-text"> SEND </span>
        </button>
      </div>
    </form>
  );
}

export default Form;
