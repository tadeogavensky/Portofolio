import React from "react";

import "./connect.css";

import connect from "../../assets/img/Taken.svg"

export const Connect = () => {
  return (
    <div id="connect">
        <img src={connect} alt="" />
      <div class="contact-wrapper animated bounceInUp">
        <div class="contact-form">
          <h3>Contact us</h3>
          <form action="">
            <p>
              <label>Full Name</label>
              <input type="text" name="fullname" />
            </p>
            <p>
              <label>Email</label>
              <input type="email" name="email" />
            </p>
            <p>
              <label>Phone Number</label>
              <input type="tel" name="phone" />
            </p>
            <p>
              <label>Affair</label>
              <input type="text" name="affair" />
            </p>
            <p class="block">
              <label>Message</label>
              <textarea name="message" rows="3"></textarea>
            </p>
            <p class="block">
              <button>Send</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
