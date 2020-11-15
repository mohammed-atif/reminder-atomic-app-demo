import React, { useEffect, useCallback, useState } from "react";

import HomeTemplate from "components/templates/HomeTemplate";

import NextEventBanner from "components/organisms/NextEventBanner";
import EventList from "components/organisms/EventList";
import AddEvent from "components/organisms/AddEvent";

import { fetchEventData } from "services/EventDataService";

const DummyView = () => (
  <div style={{ backgroundColor: "#adadad", height: "100vh" }}></div>
);

const HomePage = () => {
  const [eventDataList, setEventDataList] = useState([]);

  const fetchEventList = useCallback(async () => {
    const eventData = await fetchEventData();
    setEventDataList([...eventData]);
  }, [setEventDataList]);

  const handleAddEvent = useCallback((eventData) => {
    console.log("New Event Added", eventData);
  }, []);

  useEffect(() => {
    fetchEventList();
  }, [fetchEventList]);

  return (
    <HomeTemplate
      sideNav={<DummyView />}
      banner={
        <NextEventBanner
          date={eventDataList.length > 0 ? eventDataList[0].date : ""}
          title={eventDataList.length > 0 ? eventDataList[0].title : ""}
          description={
            eventDataList.length > 0 ? eventDataList[0].description : ""
          }
          type={eventDataList.length > 0 ? eventDataList[0].type : ""}
        />
      }
      rightPanel={
        <EventList title="Upcoming Event" eventDataList={eventDataList} />
      }
      content={<AddEvent validate onSubmit={handleAddEvent} />}
    />
  );
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
