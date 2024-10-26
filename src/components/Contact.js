import React from "react";
import "./Contact.css";

const Contact = () => {
  const FormSubmission = (formData) => {
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h3 className="contact-title">Contact Us</h3>
          <p className="contact-description">
            Email, call, or complete the form to learn how Personal Finance
            Tracker can solve your messaging problem.
          </p>
          <h3 className="contact-email">hello@OpenSourceMern.in</h3>
          <h3 className="contact-phone">123-345-567</h3>
          <h3 className="support-link">Customer Support</h3>
          <div className="support-sections">
            <div className="support-item">
              <h3 className="support-title">Customer Support</h3>
              <p className="support-text">
                Our support team is available around the clock to address any
                concerns or queries you may have.
              </p>
            </div>
            <div className="support-item">
              <h3 className="support-title">Feedback and Suggestions</h3>
              <p className="support-text">
                We value your feedback and are continuously working to improve
                OSM. Your input is crucial in shaping the future of Us.
              </p>
            </div>
            <div className="support-item">
              <h3 className="support-title">Finance Inquiries</h3>
              <p className="support-text">
                For Finance-related questions or any help, please contact us at
                Finance@OpenSourceMern.in
              </p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form
            onSubmit={(form) => {
              form.preventDefault();
              const formData = {
                fullName: form.currentTarget.fullName.value,
                email: form.currentTarget.email.value,
                message: form.currentTarget.message.value,
              };
              FormSubmission(formData);
            }}
            className="form"
          >
            <div className="form-header">
              <h3 className="form-title">Get in Touch</h3>
              <p className="form-subtitle">You can reach us anytime</p>
            </div>
            <div className="form-fields">
              <div className="input-container">
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Full name"
                  className="input"
                />
              </div>
              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  className="input"
                />
              </div>
              <div className="input-container">
                <textarea
                  name="message"
                  required
                  placeholder="How can we help?"
                  className="textarea"
                  rows={7}
                ></textarea>
              </div>
              <button className="submit-button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
