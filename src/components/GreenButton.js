import { React } from "react";

import "../styles/GreenButton.css";
import PropTypes from "prop-types";

export const GreenButton = ({ button_name, button_func }) => {
  return (
    <button className="button" onClick={button_func}>
      {button_name}
    </button>
  );
};

GreenButton.propTypes = {
  button_name: PropTypes.string,
  button_func: PropTypes.func,
};
