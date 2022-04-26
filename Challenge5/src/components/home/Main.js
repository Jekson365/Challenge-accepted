import React from "react";
import { useState, usEffect } from "react";
import { Gallery } from "./Gallery";

import { FaAlipay } from "react-icons/fa";
import { Footer } from "./Footer";

var KEYBOARD = 'https://techcrunch.com/wp-content/uploads/2021/02/keyboard.jpg'
var KEYBOARD_1 = 'https://img.freepik.com/free-photo/3d-illustration-close-up-realistic-computer-laptop-keyboard-with-orange-neon-lights-black-background-gaming-keyboard-with-led-backlit_116124-9058.jpg?w=2000'
var KEYBOARD_2 = 'https://design-milk.com/images/2022/02/Nuphy_Air60_mechanicalkeyboard-3.jpg'


export const Main = () => {
  
  
  
  return (
    <>
      <header>
        <div className="icon-stage">
          <FaAlipay/>
        </div>
        <div className="pre-order">
          <button className="pre-order">PRE-ORDER NOW</button>
        </div>
      </header>
      <section>
        <div className="first-section">
          <div className="section-content">
            <h1 className="head-text">TYPEMASTER<br />KEYBOARD</h1>
            <p className="content-text">improve your productivity and gaming breaking <br />
              the bank. Upgrade to a high quality mechanical typing<br />
              experience
            </p>
            <div className="buttons">
              <button className="pre-order org">PRE-ORDER NOW</button>
              <p>RELEASE ON 25/7</p>
            </div>
          </div>
          <div className="section-image">
            <img src={KEYBOARD} />
          </div>
        </div>
      </section>
      <section>
        <div className="second-section">
          <div className="second-section-images">
            <div className="image_1 sec-sec-img">
              <div className="image-content">
                <button className="pre-order mg">Order Now</button>
                <p className="content-text">Best mechanical keyboard</p>
              </div>
              <img src={KEYBOARD_1} className='cover'/>
            </div>
            <div className="image_2 sec-sec-img">
              <img src={KEYBOARD_2} className='cover'/>
            </div>
          </div>
          <div className="second-section-content">
            <h1 className="head-text sa">
              MECHANICAL <br />
              WIRELESS <br />
              KEYBOARD <br/>
            </h1>
            <p className="content-text">
              The Typemaster keyboard boasts <br />
              top-notch build and practical <br />
              design . it offers a wide variety <br />
              of switches and keycaps. along with <br />
              reliable wireless connectivity
            </p>
            <p></p>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};
