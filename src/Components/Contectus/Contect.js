import React from 'react'
import './contect.css'
export default function Contect() {
  return (
    <div className='contect'>
      <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-body">
        <div className="contact-left">
          <p><strong>Address:</strong> 1234 Company St, City, Country</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Email:</strong> contact@company.com</p>
          <p><strong>Website:</strong> www.company.com</p>
        </div>
        <div className="contact-right">
          <div className="contact-form-card">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};
