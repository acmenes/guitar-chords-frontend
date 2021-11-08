import React from "react";
import { render } from "@testing-library/react";
import DropDown from "./DropDown";

it("matches snapshot", function () {
  const { asFragment } = render(<DropDown />);
  expect(asFragment()).toMatchSnapshot();
});