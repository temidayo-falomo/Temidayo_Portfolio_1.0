import React from "react";
import "./ContactForm.css";

function ContactForm() {
  return (
    <form action="submit">
      <div className="form-inputs">
        <label htmlFor="name">_name:</label>
        <input
          type="name"
          name="name"
          className="form-input"
          placeholder="your name"
          required
        />
      </div>
      <div className="form-inputs">
        <label htmlFor="email">_email:</label>
        <input
          type="email"
          name="email"
          className="form-input"
          placeholder="example@gmail.com"
          required
        />
      </div>
      <div className="form-inputs">
        <label htmlFor="subject">_subject:</label>
        <input type="text" name="subject" className="form-input" />
      </div>
      <div className="form-inputs">
        <label htmlFor="name">_message:</label>
        <textarea
          type="name"
          name="name"
          className="form-input"
          placeholder="Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. Lerned a few nice tips. Thanks! |"
        />
      </div>

      <button>submit-message</button>
    </form>
  );
}

export default ContactForm;
