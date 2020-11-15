import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Typography from "components/atoms/Typography";
import EventListItem from "components/molecules/EventListItem";

const useStyle = makeStyles((theme) => ({
  root: {},
  list: {
    maxHeight: "80vh",
    overflow: "auto",
    top: theme.spacing(2),
  },
}));

const EventList = (props) => {
  const { eventDataList } = props;
  const style = useStyle();

  return (
    <React.Fragment>
      <Grid item container className={style.root} direction="column">
        <Grid item>
          <Typography variant="header" className={style.title}>
            {props.title}
          </Typography>
        </Grid>
        <Grid item>
          <List className={style.list}>
            {eventDataList.map((eventData, index) => {
              return (
                <ListItem key={index}>
                  <EventListItem eventData={eventData} />
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
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
