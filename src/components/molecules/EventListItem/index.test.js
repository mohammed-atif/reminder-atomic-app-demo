import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "themes";

import { render } from "enzyme";

import EventListItem from ".";

describe("Event List Item", () => {
  const data = {
    date: "12:12:!2 12/12/12",
    title: "Test Title",
    type: "Test Type",
  };

  it("Renders the list item", () => {
    const wrapper = render(
      <ThemeProvider theme={baseTheme}>
        <EventListItem eventData={data} />
      </ThemeProvider>
    );
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
