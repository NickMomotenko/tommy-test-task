import React from "react";

import "./Button.scss";

const Button = ({ text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
