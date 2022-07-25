import React from "react";
import "../assets/styles/components/Loader.scss";
import Portal from "../assets/static/images/error.png";

const Loader = () => (
  <div>
    <img src={Portal} alt="portal" />
    <span>Loading...</span>
  </div>
);

export default Loader;
