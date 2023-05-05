import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxForm from "./BoxForm";

it("loads without crashing", function(){
    render(<BoxForm/>)
})

it("matches snapshot", function(){
    const {asFragment} = render(<BoxForm/>)
    expect(asFragment()).toMatchSnapshot()
})