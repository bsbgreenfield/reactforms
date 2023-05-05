import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";

it("loads without crashing", function(){
    render(<TodoForm/>)
})

it("matches snapshot", function(){
    const {asFragment} = render(<TodoForm/>)
    expect(asFragment()).toMatchSnapshot()
})