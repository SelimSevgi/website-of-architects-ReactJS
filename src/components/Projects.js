import React, { useState } from "react";
import Modal from "./Modal";
const head1 = (<p>Project 1</p>); 
const img1 = "../images/project-1.png";
const p1 = (
  <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also
    the leap into electronic typesetting, remaining essentially unchanged. It
    was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software
    like Aldus PageMaker including versions of Lorem Ipsum.
  </p>
);
const img11 = "../images/pro-exp-1.png";
const head2 = <p>Project 2</p>; 
const img2 = "../images/project-2.png";
const p2 = (
  <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also
    the leap into electronic typesetting, remaining essentially unchanged. It
    was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software
    like Aldus PageMaker including versions of Lorem Ipsum.
  </p>
);
const img22 = "../images/pro-exp-1.png";
const head3 = <p>Project 3</p>; 
const img3 = "../images/project-3.png";
const p3 = (
  <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also
    the leap into electronic typesetting, remaining essentially unchanged. It
    was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software
    like Aldus PageMaker including versions of Lorem Ipsum.
  </p>
);
const img33 = "../images/pro-exp-1.png";

export default function Projects() {
  const [count, setCount] = useState(false);
  const [header, setHeader] = useState("defaulthead");
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
            <h2>Sample Project 1 </h2>
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
                  setHeader(head1)
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
            <h2>Sample Project 2</h2>
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
                  setHeader(head2)
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
            <h2>Sample Project 3</h2>
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
                  setHeader(head3)
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
          header= {header}
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
