import React, { useState } from 'react';

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState('Send');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    const { name, email, message } = e.target.elements;

    try {
      // You can add your API call or submission logic here
      // For demonstration purposes, I'm using a setTimeout to simulate an asynchronous operation
      await new Promise((resolve) => setTimeout(resolve, 1000));

      let conFom = {
        name: name.value,
        email: email.value,
        message: message.value,
      };

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
          <button className="btn btn-danger" type="submit">
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





