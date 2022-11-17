import React from "react";
import "./button.css";

export const Button = (props) => {
  const { children, onClick } = props;

  return (
    <div className="button-wrapper">
      <button className="button" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
