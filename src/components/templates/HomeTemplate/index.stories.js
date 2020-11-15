import React from "react";
import HomeTemplate from ".";

import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "themes";

import NextEventBanner from "components/organisms/NextEventBanner";
import AddEventContent from "components/organisms/AddEvent";
import UpcomingEventPanel from "components/organisms/EventList";

const eventDataList = [
  {
    date: "12:12:12 12/12/12",
    title: "Storybook Event",
    type: "Reminder",
  },
  {
    date: "12:12:12 12/12/12",
    title: "Storybook Event",
    type: "Reminder",
  },
  {
    date: "12:12:12 12/12/12",
    title: "Storybook Event",
    type: "Reminder",
  },
  {
    date: "12:12:12 12/12/12",
    title: "Storybook Event",
    type: "Reminder",
  },
  {
    date: "12:12:12 12/12/12",
    title: "Storybook Event",
    type: "Reminder",
  },
  {
    date: "12:12:12 12/12/12",
    title: "Storybook Event",
    type: "Reminder",
  },
  {
    date: "12:12:12 12/12/12",
    title: "Storybook Event",
    type: "Reminder",
  },
  {
    date: "12:12:12 12/12/12",
    title: "Storybook Event",
    type: "Reminder",
  },
  {
    date: "12:12:12 12/12/12",
    title: "Storybook Event",
    type: "Reminder",
  },
  {
    date: "12:12:12 12/12/12",
    title: "Storybook Event",
    type: "Reminder",
  },
];

const DummyView = (props) => (
  <div style={{ backgroundColor: props.color, height: props.height }}></div>
);

const HomeTemplateComponent = {
  title: "HomeTemplateComponent",
  component: HomeTemplate,
};

const Template = (args) => (
  <ThemeProvider theme={baseTheme}>
    <HomeTemplate {...args} />
  </ThemeProvider>
);

export const emptyHomeTemplate = Template.bind({});
emptyHomeTemplate.args = {
  sideNav: <DummyView color="#600" height="100vh" />,
  banner: <DummyView color="#060" height="30vh" />,
  content: <DummyView color="#006" height="60vh" />,
  rightPanel: <DummyView color="#606" height="100vh" />,
};

export const filledHomeTemplate = Template.bind({});
filledHomeTemplate.args = {
  sideNav: <DummyView color="#600" height="100vh" />,
  banner: (
    <NextEventBanner
      date="12-12-12 12:12:!2 PM"
      title="Storybook Next Event"
      description="Sotrybook Event Description Text"
      type="storybook"
    />
  ),
  content: <AddEventContent />,
  rightPanel: (
    <UpcomingEventPanel title="Next Events" eventDataList={eventDataList} />
  ),
};

export default HomeTemplateComponent;
