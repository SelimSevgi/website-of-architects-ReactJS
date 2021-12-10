import React, { useState } from "react";
import Modal from "./Modal";
const img1 = "../images/pro-exp-1.png";
const p1 = "aaaaaaaa";
const img11 = "../images/pro-exp-1.png";
const img2 = "../images/pro-exp-1.png";
const p2 = "ccc";
const img22 = "../images/pro-exp-1.png";
const img3 = "../images/pro-exp-1.png";
const p3 = "bbbb";
const img33 = "../images/pro-exp-1.png";

export default function Projects() { 
  const [count, setCount] = useState(false);
  const [images1, setimages1] = useState("defaultimg1");
  const [paragraf, setparagraf] = useState("defaultp");
  const [images2, setimages2] = useState("defaultimages2");

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
            <img src="../images/project-1.png" alt="images" />
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
              {" "}
              <Modal state={Modal} />
              <button
                onClick={() => {
                  setCount(!count);
                  setparagraf(p1);
                  setimages1(img1);
                  setimages2(img11);
                }}
              >
                VIEW MORE
              </button>{" "}
            </div>
          </div>
        </div>

        <div className="pro-list-item">
          <div className="pro-list-right">
            <img src="../images/project-2.png" alt="images" />
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
              {" "}
              <Modal state={Modal} />
              <button
                onClick={() => {
                  setCount(!count);
                  setparagraf(p2);
                  setimages1(img2);
                  setimages2(img22);
                }}
              >
                VIEW MORE
              </button>{" "}
            </div>
          </div>
        </div>

        <div className="pro-list-item">
          <div className="pro-list-right">
            <img src="../images/project-3.png" alt="images" />
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
              {" "}
              <Modal state={Modal} />
              <button
                onClick={() => {
                  setCount(!count);
                  setparagraf(p3);
                  setimages1(img3);
                  setimages2(img33);
                }}
              >
                VIEW MORE
              </button>{" "}
            </div>
          </div>
        </div>
        <Modal
          paragraf={paragraf}
          images1={images1}
          images2={images2}
          sendCount={count}
        />
      </div>
      ;
    </div>
  );
}
