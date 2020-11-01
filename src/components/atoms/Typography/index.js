import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";

const getMappedVariant = (variant) => {
  switch (variant) {
    case "header":
      return "h4";
    case "title":
      return "subtitle1";
    case "subtitle":
      return "subtitle2";
    default:
      return "body1";
  }
};

const TypographyComponent = (props) => (
  <Typography variant={getMappedVariant(props.variant)}>
    {props.children}
  </Typography>
);

TypographyComponent.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["header", "title", "subtitle", "body"]),
};

TypographyComponent.defaultProps = {
  variant: "body",
};

export default TypographyComponent;
