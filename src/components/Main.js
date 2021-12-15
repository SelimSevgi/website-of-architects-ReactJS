import React, { useRef } from "react";
import Slider from "react-slick";
import About from "./About";
import emailjs from "emailjs-com";

export default function SimpleSlider() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0obrbvn",
        "template_2tavgfq",
        form.current,
        "user_V3lWZKyNg4pF1ip77SF5H"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  var settings = {
    dots: false,
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "",
  };

  return (
    <>
      <div className="main">
        <div className="main-left">
          <h1>PROJECT NAME</h1>
          <h2>SELİM WEB-DİZAYN</h2>
        </div>
        <div className="main-right">
          <Slider className="slider" {...settings}>
            <div className="slider-cont">
              <img alt="no referrer" src="https://picsum.photos/200/300" />
            </div>
            <div className="slider-cont">
              <img alt="no referrer" src="https://picsum.photos/200/300" />
            </div>
            <div className="slider-cont">
              <img alt="no referrer" src="https://picsum.photos/200/300" />
            </div>
            <div className="slider-cont">
              <img alt="no referrer" src="https://picsum.photos/200/300" />
            </div>
            <div className="slider-cont">
              <img alt="no referrer" src="https://picsum.photos/200/300" />
            </div>
            <div className="slider-cont">
              <img alt="no referrer" src="https://picsum.photos/200/300" />
            </div>
          </Slider>
        </div>
      </div>
      <About />
      <div className="m-focus-div">
        <h1 className="m-focus-header">Main Focus/Mission Statement</h1>
        <div className="m-focus">
          <div className="m-focus-1">
            <p>1</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat.
            </p>
          </div>
          <div className="m-focus-2">
            <p>2</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat.
            </p>
          </div>
        </div>
      </div>
      <div className="our-proje">
        <h1 className="our-proje-header">Our Projects</h1>

        <div className="our-proje-foto">
          <div className="our-proje-foto1">
            <a target="_blank" href="/">
              <img
                className="our-pro-img"
                alt="no referrer"
                src="../images/our-pro-1.png"
              />
            </a>
          </div>
          <div className="our-proje-foto2">
            <a target="_blank" href="/">
              <img
                className="our-pro-img"
                alt="no referrer"
                src="../images/our-pro-2.png"
              />
            </a>
          </div>
          <div className="our-proje-foto3">
            <a target="_blank" href="/">
              <img
                className="our-pro-img"
                alt="no referrer"
                src="../images/our-pro-3.png"
              />
            </a>
          </div>
          <div className="our-proje-foto4">
            <a target="_blank" href="/">
              <img
                className="our-pro-img"
                alt="no referrer"
                src="../images/our-pro-4.png"
              />
            </a>
          </div>
          <div className="our-proje-foto5">
            <a target="_blank" href="/">
              <img
                className="our-pro-img"
                alt="no referrer"
                src="../images/our-pro-5.png"
              />
            </a>
          </div>
        </div>

        <a href="/projects" rel="noreferrer">
          <div className="our-pro-bttn">
            {" "}
            <button>ALL PROJECTS </button>
          </div>
        </a>
      </div>
     
        
        <div className="contact">
        
          <form className="contact-left" ref={form} onSubmit={sendEmail}>
           <h1 className="contact-header">Contact Us</h1> <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            ></input>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="1231231212*"
              pattern="[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"
              required
            ></input>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail*"
              required
            ></input>
            <input
              type="text"
              id="interest"
              name="subject"
              placeholder="Interested In"
              required
            ></input>
            <textarea
              id="message"
              name="message"
              rows="10"
              cols="50"
              required
              placeholder="Message*"
            ></textarea>
            <input
              type="submit"
              className="contact-btn"
              value="Send Message"
              required
            ></input>
          </form>

          <div className="contact-right">
            <img alt="no referrer" src="../images/contact.png" />
          </div>
        </div>
      
    </>
  );
}
