import React, { useState } from "react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";

export default function Projects() {
  const [modal, setModal] = useState(false);
  return (
    <div className="pro">
      <div className="pro-header">
        <h1>
          <span className="pro-header-gri">Our</span>
          <br />
          Projects
        </h1>
      </div>
      <div className="pro-list">
        <div className="pro-list-item">
          <div className="pro-list-right">
            <img src="../images/project-1.png" />
          </div>
          <div className="pro-list-left">
            <h2>Sample Project</h2>
            <div className="pro-list-p">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="pro-list-btn">
              <button onClick={() => setModal(true)}>VIEW MORE</button>{" "}
            </div>
          </div>
        </div>

        <div className="pro-list-item">
          <div className="pro-list-right">
            <img src="../images/project-2.png" />
          </div>
          <div className="pro-list-left">
            <h2>Sample Project</h2>
            <div className="pro-list-p">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="pro-list-btn">
              <button>VIEW MORE</button>{" "}
            </div>
          </div>
        </div>

        <div className="pro-list-item">
          <div className="pro-list-right">
            <img src="../images/project-3.png" />
          </div>
          <div className="pro-list-left">
            <h2>Sample Project</h2>
            <div className="pro-list-p">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="pro-list-btn">
              <button>VIEW MORE</button>{" "}
            </div>
          </div>
        </div>
      </div>
      <PureModal
        width="1440px"
        header="Your header"
        footer={
          <div>
            <button>Cancel</button>
            <button>Save</button>
          </div>
        }
        isOpen={modal}
        closeButton="close"
        closeButtonPosition="bottom"
        onClose={() => {
          setModal(false);
          return true;
        }}
      >
        <div>
          <img src="../images/project-1.png" />
        </div>
      </PureModal>
      ;
    </div>
  );
}
