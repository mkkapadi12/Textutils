import React, { useState } from "react";
import "../App.css";

export default function TextForm(props) {
  let [text, settext] = useState("Enter text here..");

  const convertUpText = () => {
    // console.log("uppercase clicked !");
    let newText = text.toUpperCase();
    settext(newText);
    props.showAlert("Converted to Uppercase !", "success");
  };

  const convertLowText = () => {
    // console.log("uppercase clicked !");
    let newText = text.toLowerCase();
    settext(newText);
    props.showAlert("Converted to Lowercase !", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change !");
    settext(event.target.value);
  };

  const CopyText = () => {
    let copytext = document.getElementById("myText");
    copytext.select();
    navigator.clipboard.writeText(copytext.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied Text !", "success");
  };

  const ClearText = () => {
    settext("");
  };

  return (
    <>
      <div className="form-group container">
        <h1
          className="my-3 text-center"
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          Enter the Text to analyze below{" "}
        </h1>
        <textarea
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#3b5db9",
            color: props.mode === "light" ? "black" : "white",
          }}
          className="form-control"
          id="myText"
          rows="11"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <div className="text-center">
          <button
            className="btn bg-dark btn-primary my-3 mx-3"
            onClick={convertUpText}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn bg-dark btn-primary my-3 mx-3"
            onClick={convertLowText}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn bg-dark btn-primary my-3 mx-3"
            onClick={CopyText}
          >
            Copy Text
          </button>

          <button
            className="btn bg-dark btn-primary my-3 mx-3"
            onClick={ClearText}
          >
            Clear Text
          </button>
        </div>

        <div
          className="border p-3"
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <h3>Your text Summary here...</h3>
          <p>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            Words and {text.length} characters
          </p>
          <p>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            minutes for read time
          </p>
          <h3>Preview : </h3>
          <p>
            {text.length > 0
              ? text
              : "Write Something in the textbox above to preview it here"}
          </p>
        </div>
      </div>
    </>
  );
}
