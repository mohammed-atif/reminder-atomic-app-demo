import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "themes";

import { render } from "enzyme";

import NextEventBanner from ".";

describe("Next Event Banner", () => {
  it("render next event banner", () => {
    const wrapper = render(
      <ThemeProvider theme={baseTheme}>
        <NextEventBanner
          date="12:!2:!2 12/12/12"
          title="Title"
          description="Description"
          type="Type"
        />
      </ThemeProvider>
    );
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
