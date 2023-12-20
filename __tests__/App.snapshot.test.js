import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import App from "../src/App";

test("renders learn react link", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
