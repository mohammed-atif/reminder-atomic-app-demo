import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "themes";

import { render } from "enzyme";

import HomePage from ".";

describe("Render the Home Page", () => {
  it("Renders the Home Page", async () => {
    jest.useFakeTimers();
    const wrapper = render(
      <ThemeProvider theme={baseTheme}>
        <HomePage />
      </ThemeProvider>
    );
    await Promise.resolve();
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
