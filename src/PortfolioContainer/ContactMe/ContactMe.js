import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsPerson, BsTelephone } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { FiSend } from "react-icons/fi";

const ContactMe = () => {
  return (
    <section className="contactme" id="contactme">
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contactme-content">
          <div className="column left">
            <div className="icons">
              <div className="contactme-row">
                <BsPerson className="icon" />
                <div className="info">
                  <div className="head">FullName:</div>
                  <div className="sub-title">Refka Guenichi</div>
                </div>
              </div>
              <div className="contactme-row">
                <BiMap className="icon" />
                <div className="info">
                  <div className="head">Address:</div>
                  <div className="sub-title">
                    El Mourouj 6, Ben arous, Tunisia
                  </div>
                </div>
              </div>
              <div className="contactme-row">
                <BsTelephone className="icon" />
                <div className="info">
                  <div className="head">Phone:</div>
                  <div className="sub-title">+21652957580 | +21651468641</div>
                </div>
              </div>
              <div className="contactme-row">
                <MdOutlineAlternateEmail className="icon" />
                <div className="info">
                  <div className="head">Email:</div>
                  <div className="sub-title">refkaguenichi@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="text">Message me</div>
            <form
              action="https://formsubmit.co/refkaguenichi@gmail.com"
              method="POST"
            >
              <div className="fields">
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="your custom message"
                />
                <input type="text" name="_honey" style={{ display: "none" }} />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="New submission!" />
                <div className="field name">
                  <label>Name*</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="field email">
                  <label>Email*</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label>Subject</label>
                <input type="text" placeholder="Subject of your message" />
              </div>
              <div className="field textarea">
                <label>Object*</label>
                <textarea
                  cols="30"
                  rows="10"
                  name="object"
                  placeholder="Message object"
                  required
                ></textarea>
              </div>
              <div className="button">
                <button type="submit">
                  <FiSend size={25} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
