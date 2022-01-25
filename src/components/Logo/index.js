import React from "react";

import { Link } from "react-router-dom";

import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/" className="logo__link">
        Stock List App
      </Link>
    </div>
  );
};

export default Logo;
