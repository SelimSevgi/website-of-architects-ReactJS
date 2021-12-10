import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="contactpage-header">
        <h1>
          <span className="pro-header-gri">Contact</span>
          <br />
          Information
        </h1>
      </div>
      <div className="contactpage">
        <div className="contactpage-left">
          <div className="contactpage-left-list">
            <div className="contact-left-list-company">
              <p className="contact-left-list-article">
                <span className="company-address">
                  Company Name
                  <br />
                </span>
                Türkiye{" "}
              </p>
            </div>{" "}
            <div className="contact-left-list-article">
              {" "}
              <span className="company-address">44ssevgi@gmail.com</span>
            </div>
            <div className="contact-left-list-article">512.333.2222</div>
            <div className="contact-left-list-btn">
              <button>CONTACT US</button>
            </div>
          </div>
        </div>
        <div className="contactpage-right">
          <img src="../images/contact-page-loc.png"></img>
        </div>
      </div>
    </div>
  );
}
