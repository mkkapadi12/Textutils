import React from "react";

function Alert(props) {
  const capitlize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <div style={{ width: "100%", height: "90px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>
            {capitlize(props.alert.type)} {props.alert.msg}
          </strong>

          {/* <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
        </div>
      )}
    </div>
  );
}

export default Alert;
