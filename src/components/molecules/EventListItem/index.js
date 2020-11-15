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
        ? theme.palette.containerSecondary.dark
        : theme.palette.containerSecondary.light,
    borderRadius: theme.container.secondary.borderRadius,
    padding: theme.container.secondary.padding,
  },
}));

const EventListItemComponent = (props) => {
  const { eventData } = props;
  const style = useStyle();

  return (
    <React.Fragment>
      <Box component={Container} boxShadow={2} className={style.root}>
        <Typography variant="header">{eventData.date}</Typography>
        <Typography variant="title">{eventData.title}</Typography>
        <Typography variant="subtitle">{eventData.type}</Typography>
      </Box>
    </React.Fragment>
  );
};

EventListItemComponent.propTypes = {
  eventData: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
};

EventListItemComponent.defaultProps = {};

export default EventListItemComponent;
