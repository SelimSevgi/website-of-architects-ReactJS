import React, { useRef } from "react";
import Modal from "react-modal";
import emailjs from "emailjs-com";

// Modal setting //

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement("#yourAppElement");

export default function Contact() {
  // Modal ilgili kısımlar
  // -----

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  // -----

  // EmailJs------
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
  //-----
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
              <button onClick={openModal}>CONTACT US</button>
              <Modal
                className="contact-modal"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                //contentLabel="Example Modal"
              >
                <div className="contact-modal-border">
                  <h1 className="contact-modal-header">Contact Us</h1>
                  <button className="contact-modal-cls" onClick={closeModal}>
                    {" "}
                    <i className="fa fa-times-circle fa-2x"></i>
                  </button>
                  <div className="contact">
                    <form
                      className="contact-left"
                      ref={form}
                      onSubmit={sendEmail}
                    >
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        required // boş girilmesini önlemek için
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
                        name="interest"
                        placeholder="Interested In"
                        required
                      ></input>
                      <textarea
                        id="message"
                        name="message"
                        rows="10"
                        cols="50"
                        placeholder="Message*"
                        required
                      ></textarea>
                      <input
                        type="submit"
                        className="contact-btn"
                        value="Send Message"
                      ></input>
                    </form>

                    <div className="contact-right">
                      <img alt="no referrer" src="../images/contact.png" />
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
        <div className="contactpage-right">
          <img src="../images/contact-page-loc.png" alt="noreferrer"></img>
        </div>
      </div>
    </div>
  );
}
