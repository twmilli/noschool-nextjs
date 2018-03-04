import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'react-feather';

import stylesheet from '../styles/contact.scss';


const Contact = () => (
  <div className="contact-container">
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <Link href="/">
      <a>
        <ArrowLeft /> <span>Back to Noschool </span>
      </a>
    </Link>
    <h1>Contact</h1>
    <form method="POST" action="https://formspree.io/twm013@bucknell.edu">
      <div>
        <label htmlFor="name"> Name (Required)
          <input id="name" type="text" name="name" required />
        </label>
      </div>
      <div>
        <label htmlFor="email"> Email (Required)
          <input id="email" type="email" name="email" required />
        </label>
      </div>
      <div>
        <label htmlFor="subject"> Subject
          <input id="subject" type="text" name="subject" />
        </label>
      </div>
      <div>
        <label htmlFor="message"> Message (Required)
          <textarea id="message" name="message" required />
        </label>
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
);

export default Contact;
