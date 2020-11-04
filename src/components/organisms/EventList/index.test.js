import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "themes";

import { render, shallow } from "enzyme";

import EventList from ".";

describe("Event List", () => {
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
  ];
  it("Renders with data", () => {
    const wrapper = render(
      <ThemeProvider theme={baseTheme}>
        <EventList title="Upcoming Events" eventDataList={eventDataList} />
      </ThemeProvider>
    );
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
