import { shallow, render } from "enzyme";

import Button from ".";

describe("Primary Button", () => {
  it("Renders Primary Button", () => {
    const wrapper = render(<Button title="Primary Button" />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
  it("Renders Disabled Button", () => {
    const wrapper = render(<Button title="Disabled Button" disabled />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
  it("Handles button click", () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(
      <Button title="Button Click" onClick={mockFunction} />
    );
    wrapper.simulate("click");
    wrapper.update();
    expect(mockFunction).toBeCalled();
  });
});
