import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setbtnText] = useState("Enable Dark Mode");

  const ToggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "grey",
      });
      setbtnText("Enable light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setbtnText("Enable Dark Mode");
    }
  };

  return (
    <div className="container my-3">
      <h2 className="my-3 text-center">About Us</h2>
      <div
        className="accordion rounded-lg-2"
        style={myStyle}
        id="accordionExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Section 1 :
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              nobis, sint vero maxime laboriosam autem omnis ad alias aperiam
              harum adipisci recusandae deserunt odit officia, quaerat iure,
              earum impedit magni. Eius ex labore accusantium voluptate
              exercitationem consectetur omnis asperiores repudiandae, nulla,
              optio earum corporis fuga. Omnis, sunt voluptatibus, quo impedit
              autem quasi atque et aliquid quae, sapiente vel beatae accusamus.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Section 2 :
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              nobis, sint vero maxime laboriosam autem omnis ad alias aperiam
              harum adipisci recusandae deserunt odit officia, quaerat iure,
              earum impedit magni. Eius ex labore accusantium voluptate
              exercitationem consectetur omnis asperiores repudiandae, nulla,
              optio earum corporis fuga. Omnis, sunt voluptatibus, quo impedit
              autem quasi atque et aliquid quae, sapiente vel beatae accusamus.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Section 3 :
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              nobis, sint vero maxime laboriosam autem omnis ad alias aperiam
              harum adipisci recusandae deserunt odit officia, quaerat iure,
              earum impedit magni. Eius ex labore accusantium voluptate
              exercitationem consectetur omnis asperiores repudiandae, nulla,
              optio earum corporis fuga. Omnis, sunt voluptatibus, quo impedit
              autem quasi atque et aliquid quae, sapiente vel beatae accusamus.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-4 text-center">
        <button className="btn btn-primary" onClick={ToggleStyle}>
          {btnText}
        </button>
      </div>
    </div>
  );
}
