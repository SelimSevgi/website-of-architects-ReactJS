import React from "react";


export default function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="foto1">
          <img
            className="about-left-image-1"
            src="../images/about-2.png"
            alt="noreferrer"
          />
        </div>
        <div className="foto2">
          <img
            className="about-left-image-2"
            src="../images/about-1.png"
            alt="noreferrer"
          />
        </div>
        <div className="foto3">
          <img
            className="about-left-image-3"
            src="../images/about-3.png"
            alt="noreferrer"
          />
        </div>
      </div>
      <div className="about-right">
        <h1>About</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

        <button className="about-right-bttn">READ MORE</button>
      </div>
    </div>
  );
}
