import React, { useEffect } from "react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";

export default function Modal(props) {
  const { paragraf, images1, images2, sendCount } = props;

  const [modalIsOpen, setIsOpen] = React.useState(!sendCount);

  useEffect(() => {
    setIsOpen(!modalIsOpen);
  }, [sendCount]);

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <PureModal
        width="1440px"
        height="5000px"
        isOpen={modalIsOpen}
        closeButton="close"
        closeButtonPosition="bottom"
        onRequestClose={closeModal}
        onClose={closeModal}
      >
        <div className="pro-exp-modal">
          <div className="pro-exp-header">
            <p>
              {" "}
              <span className="pro-exp-head-gri">Sample</span> Project 1{" "}
            </p>
          </div>
          <div className="pro-exp-commet">
            <div className="pro-exp-up">
              <img src={images1} alt="images" />
            </div>
            <div className="pro-exp-mid">
              <div className="pro-exp-right">
                <p>{paragraf}</p>
              </div>
            </div>
            <div className="pro-exp-down">
              <img src={images2} alt="images" />
            </div>
          </div>
        </div>
      </PureModal>
    </div>
  );
}
