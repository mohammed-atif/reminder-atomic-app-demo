import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "themes";

import { render } from "enzyme";

import HomeTemplate from ".";

const DummyView = () => <div></div>;

describe("Home Template", () => {
  it("Render Home Template", () => {
    const wrapper = render(
      <ThemeProvider theme={baseTheme}>
        <HomeTemplate
          sideNav={<DummyView />}
          banner={<DummyView />}
          content={<DummyView />}
          rightPanel={<DummyView />}
        />
      </ThemeProvider>
    );
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
