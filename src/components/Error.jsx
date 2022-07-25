import React from "react";
import "../assets/styles/components/Error.scss";
import errorImage from "../assets/static/images/error.png";
const Error = () => (
  <div>
    <img className="error-img" src={errorImage} alt="error-rick" />
    <span className="error-text">Sorry, an error has ocurred.</span>
  </div>
);

export default Error;
