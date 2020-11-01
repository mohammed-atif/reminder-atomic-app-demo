import { render } from "enzyme";

import Typography from ".";

describe("Typography", () => {
  it("Renders Default Body", () => {
    const wrapper = render(<Typography>Body</Typography>);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
  it("Renders Body", () => {
    const wrapper = render(<Typography variant="body">Body</Typography>);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
  it("Renders Header", () => {
    const wrapper = render(<Typography variant="header">Header</Typography>);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
  it("Renders Title", () => {
    const wrapper = render(<Typography variant="title">Title</Typography>);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
  it("Renders Subtitle", () => {
    const wrapper = render(
      <Typography variant="subtitle">Subtitle</Typography>
    );
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
