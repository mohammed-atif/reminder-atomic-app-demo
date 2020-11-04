import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Typography from "components/atoms/Typography";
import EventListItem from "components/molecules/EventListItem";

const useStyle = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  title: {
    position: "static",
  },
  list: {
    overflow: "auto",
    maxHeight: 700,
    top: theme.spacing(2),
  },
}));

const EventList = (props) => {
  const { eventDataList } = props;
  const style = useStyle();

  return (
    <React.Fragment>
      <Box component={Container} className={style.root}>
        <Typography variant="header" className={style.title}>
          {props.title}
        </Typography>
        <List className={style.list}>
          {eventDataList.map((eventData, index) => {
            return (
              <ListItem key={index}>
                <EventListItem eventData={eventData} />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </React.Fragment>
  );
};

EventList.propTypes = {
  title: PropTypes.string.isRequired,
  eventDataList: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),
};

EventList.defaultProps = {};

export default EventList;
