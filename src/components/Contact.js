import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullName = e.currentTarget.fullName.value.trim();
    const email = e.currentTarget.email.value.trim();
    const message = e.currentTarget.message.value.trim();

    if (!fullName || fullName.length < 2) {
      setStatus({ state: "error", message: "Please enter your full name." });
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({
        state: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }
    if (!message || message.length < 5) {
      setStatus({
        state: "error",
        message: "Message must be at least 5 characters.",
      });
      return;
    }

    setIsSending(true);
    setStatus({ state: "sending", message: "Sending..." });

    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, message }),
      });

      if (!resp.ok) {
        const data = await resp.json().catch(() => ({}));
        const errMsg =
          data && data.errors
            ? data.errors.map((e) => e.msg).join(", ")
            : data.error || "Failed to send message";
        setStatus({ state: "error", message: errMsg });
        setIsSending(false);
        return;
      }

      setStatus({
        state: "success",
        message: "Thanks — your message has been sent.",
      });
      e.currentTarget.reset();
    } catch (err) {
      setStatus({
        state: "error",
        message: "Network error — please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="contact-container" aria-labelledby="contact-heading">
      <div className="contact-content">
        <div className="contact-info">
          <h2 id="contact-heading" className="contact-title">
            Contact Us
          </h2>
          <p className="contact-description">
            Email, call, or complete the form to learn how Personal Finance
            Tracker can solve your messaging problem.
          </p>
          <p className="contact-email" aria-label="Email address">
            hello@OpenSourceMern.in
          </p>
          <p className="contact-phone" aria-label="Phone number">
            123-345-567
          </p>

          <section
            className="support-sections"
            aria-labelledby="support-title"
          >
            <h3 id="support-title" className="support-link">
              Customer Support
            </h3>
            <div className="support-item">
              <h4 className="support-title">Customer Support</h4>
              <p className="support-text">
                Our support team is available around the clock to address any
                concerns or queries you may have.
              </p>
            </div>
            <div className="support-item">
              <h4 className="support-title">Feedback and Suggestions</h4>
              <p className="support-text">
                We value your feedback and are continuously working to improve
                OSM. Your input is crucial in shaping the future of Us.
              </p>
            </div>
            <div className="support-item">
              <h4 className="support-title">Finance Inquiries</h4>
              <p className="support-text">
                For Finance-related questions or any help, please contact us at
                Finance@OpenSourceMern.in
              </p>
            </div>
          </section>
        </div>

        <div className="contact-form">
          <form
            onSubmit={handleSubmit}
            className="form"
            aria-describedby="form-status"
          >
            <div className="form-header">
              <h3 className="form-title">Get in Touch</h3>
              <p className="form-subtitle">You can reach us anytime</p>
            </div>

            <div className="form-fields">
              <div className="input-container">
                <label htmlFor="fullName">Full name</label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  required
                  placeholder="Full name"
                  className="input"
                />
              </div>

              <div className="input-container">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  className="input"
                />
              </div>

              <div className="input-container">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="How can we help?"
                  className="textarea"
                  rows={7}
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={isSending}
                aria-label="Submit contact form"
              >
                {isSending ? "Sending..." : "Submit"}
              </button>

              <div id="form-status" role="status" aria-live="polite">
                {status.state === "error" && (
                  <p className="form-error" role="alert">
                    {status.message}
                  </p>
                )}
                {status.state === "success" && (
                  <p className="form-success">{status.message}</p>
                )}
                {status.state === "sending" && (
                  <p className="form-sending">{status.message}</p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
