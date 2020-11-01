import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const wrapper = render(<App />);
  expect(wrapper).toBeDefined();
});
