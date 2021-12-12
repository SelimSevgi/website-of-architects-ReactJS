import React from "react";

export default function Footer() {
  return (
    <div className="footer-color">
      <div className="footer">
        <div className="footer-top">
          <div className="footer-logo">
            <div className="footer-logo-img">
              <img alt="no referrer" src="../images/footer.png" />
            </div>
          </div>
          <div className="information">
            <ul>
              <div className="information-item">
                <h2>Information</h2>
              </div>
              <div className="information-item">
                <a href="/" target="_blank" rel="noreferrer">
                  Main
                </a>
              </div>
              <div className="information-item">
                <a href="/gallery" target="_blank" rel="noreferrer">
                  Gallery
                </a>
              </div>
              <div className="information-item">
                <a href="/projects" target="_blank" rel="noreferrer">
                  Projects
                </a>
              </div>
              <div className="information-item">
                <a href="/certification" target="_blank" rel="noreferrer">
                  Certifications
                </a>
              </div>
              <div className="information-item">
                <a href="/contact" target="_blank" rel="noreferrer">
                  Contact
                </a>
              </div>
            </ul>
          </div>
          <div className="contact-foot">
            <ul>
              <div className="contact-item">
                <h2>Contact</h2>
              </div>
              <div className="contact-item">
                <p>
                  <i className="fa fa-map-marker-alt"></i>
                </p>
                <p>Türkiye</p>
              </div>
              <div className="contact-item">
                <p>
                  <i className="fa fa-phone-alt"></i>
                </p>
                <p>1512.333.2222</p>
              </div>
              <div className="contact-item">
                <p>
                  <i className="fa fa-envelope"></i>
                </p>
                <p>44ssevgi@gmail.com</p>
              </div>
            </ul>
          </div>
          <div className="social-media">
            <h2> Social Media</h2>
            <div className="social-media-item">
              <a
                href="https://github.com/SelimSevgi"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github fa-2x"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/selim-sevgi-685743150/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin fa-2x"></i>
              </a>
              <a
                href="https://twitter.com/?lang=tr"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-twitter fa-2x"></i>
              </a>
              <a
                href="https://tr.pinterest.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-pinterest-p fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © 2021
          <span> All Rights Reserved</span> <br />
          <span>created by</span>
          <a
            style={{ color: "#fff", padding: 10 }}
            href="https://github.com/SelimSevgi"
            target="_blank"
            rel="noreferrer"
          >
            Selim Sevgi
          </a>
        </div>
      </div>
    </div>
  );
}
