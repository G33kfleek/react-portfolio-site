import React, { useState } from 'react';

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState('Send');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (e) => {
   
    e.preventDefault();
    console.log("Ready to Send");
    setFormStatus('Submitting...');
    const { name, email, message } = e.target.elements;
    
    try {
      let details = {
        name: name.value,
        email: email.value,
        message: message.value,
      };

      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      let result = await response.json();
      alert(result.status);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log(conFom);
      setIsSubmitted(true);
      setFormStatus('Submitted!');
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('Error!');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Contact me</h2>
      {!isSubmitted ? (
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="btn btn-danger" type="submit" onClick = {onSubmit}>
            {formStatus}
          </button>
        </form>
      ) : (
        <div className="alert alert-success mt-3" role="alert">
          Thank you for your message! We will get back to you soon.
        </div>
      )}
    </div>
  );
};

export default ContactForm;





