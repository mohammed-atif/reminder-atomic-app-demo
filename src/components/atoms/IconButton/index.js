import React from "react";
import PropTypes from "prop-types";

import IconButton from "@material-ui/core/IconButton";

const IconButtonComponent = ({ icon, ...props }) => (
  <IconButton color="primary" disabled={props.disabled} onClick={props.onClick}>
    {icon}
  </IconButton>
);

IconButtonComponent.propTypes = {
  icon: PropTypes.element.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

IconButtonComponent.defaultProps = {
  disable: false,
};

export default IconButtonComponent;
