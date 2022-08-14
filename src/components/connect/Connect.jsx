import React, { useRef } from 'react';

import "./connect.css";

import Swal from 'sweetalert2'

import connect from "../../assets/img/Taken.svg";


import emailjs from 'emailjs-com';

export const Connect = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mw8owks', 'template_9c8lmvg', form.current, 'q4UoDD7fi6TwT-kgw')
      .then((result) => {
        Swal.fire({
          title: 'Email sent!',
          text: 'You will hear from me in no time!',
          background:"#151515",
          color: "white",
          icon: 'success',
          iconColor:"#d63031",
          confirmButtonColor:"#d63031",
          confirmButtonText: 'Cool'
        })
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="connect">
      <img src={connect} alt="" />
      <div class="contact-wrapper animated bounceInUp">
        <div class="contact-form">
          <h3>Contact us</h3>
          <form ref={form}>
            <p>
              <label>Full Name</label>
              <input type="text" name="name" required />
            </p>
            <p>
              <label>Email</label>
              <input type="email" name="email" required />
            </p>
            <p>
              <label>Phone No.</label>
              <input type="tel" name="phone" required />
            </p>
            <p>
              <label>Affair</label>
              <input type="text" name="subject" required />
            </p>
            <p class="block">
              <label>Message</label>
              <textarea name="message" rows="3" required></textarea>
            </p>
            <p class="block">
              <button type="submit" onClick={sendEmail}>Send</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
