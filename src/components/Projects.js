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
        height="5000px"
        isOpen={modal}
        closeButton="close"
        closeButtonPosition="bottom"
        onClose={() => {
          setModal(false);
          return true;
        }}
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
              <img src="../images/pro-exp-1.png" />
            </div>
            <div className="pro-exp-mid">
              <div className="pro-exp-right">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem
                  Ipsum passages, and more recently with.
                </p>
              </div>
            </div>
            <div className="pro-exp-down">
              <img src="../images/pro-exp-3.png" />
            </div>
          </div>
        </div>
      </PureModal>
      ;
    </div>
  );
}
