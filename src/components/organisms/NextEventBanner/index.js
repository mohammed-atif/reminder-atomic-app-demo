import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import Typography from "components/atoms/Typography";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.containerPrimary.dark
        : theme.palette.containerPrimary.light,
    padding: theme.container.primary.padding,
  },
}));

const NextEventBanner = (props) => {
  const style = useStyle();

  return (
    <Box component={Container} boxShadow={2} className={style.root}>
      <Typography variant="header">{`Next Event: ${props.date}`}</Typography>
      <Typography variant="title">{props.title}</Typography>
      <Typography variant="body">{props.description}</Typography>
      <Typography variant="subtitle">{props.type}</Typography>
    </Box>
  );
};

NextEventBanner.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

NextEventBanner.defaultProps = {};

export default NextEventBanner;
