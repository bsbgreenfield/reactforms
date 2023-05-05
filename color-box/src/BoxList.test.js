import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./Boxlist";

function addBox(BoxList) {
  const width = BoxList.queryByLabelText("Width");
  console.log("************************", width)
  const height = BoxList.queryByLabelText("Height");
  const color = BoxList.queryByLabelText("Color");
  fireEvent.change(width, { target: { value: 100}});
  fireEvent.change(height, { target: { value: 100}});
  fireEvent.change(color, { target: { value: '#000000'}});
  const submitButton = BoxList.getByText("Create Box!");
  fireEvent.click(submitButton);
}

it("renders without crashing", function() {
  render(<BoxList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a box", function() {
  const list = render(<BoxList />);
  addBox(list);

  // expect form to clear and todo to be on the page
  expect(list.queryByLabelText("Width")).toHaveValue("50");
  expect(list.queryByLabelText("Width")).toBeInTheDocument();
  expect(list.queryByLabelText("Height")).toHaveValue("50");
  expect(list.queryByLabelText("Height")).toBeInTheDocument();
  expect(list.queryByLabelText("Color")).toHaveValue('#000000');
  expect(list.queryByLabelText("Color")).toBeInTheDocument();

  expect(list.getByTestId("box")).toBeInTheDocument()
});



it("can delete a box", function() {
  const list = render(<BoxList />);
  addBox(list);

  const thisBox = list.getByTestId("box")
  fireEvent.click(list.getByTestId("deleter"));

  // expect todo to be gone
  expect(thisBox).not.toBeInTheDocument()
});