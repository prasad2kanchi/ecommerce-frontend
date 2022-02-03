import React from "react";

import App from "./App";

import renderer from "react-test-renderer";
import Register from "./components/Register";

import Login from "./components/Login";
import { render, fireEvent } from "@testing-library/react";
import AddProduct from "./components/Admin/AddProduct";

describe("<Register/>", () => {
  it("It renders Correctly", () => {
    const tree = renderer.create(<Register />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("It renders 2 Correctly", () => {
    const handleClick = jest.fn();
    const { container } = render(<Register />);
    fireEvent.click(container.querySelector("button"));
    expect(handleClick).toBeCalledTimes(0);
  });
});

// describe("<Login/>", () => {
//   it("it Renders Login Correctly", () => {
//     const tree = renderer.create(<Login />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
//   it("it renders 2 Login Correctly", () => {
//     const handleClick = jest.fn();
//     const { container } = render(<Login />);
//     fireEvent.click(container.querySelector("button"));
//     expect(handleClick).toBeCalledTimes(0);
//   });
// });

// describe("<AddProduct/>", () => {
//   it("it renders addproduct correctly", () => {
//     const tree = renderer.create(<AddProduct />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
//   it("it renders 2 correctly add", () => {
//     const result = jest.fn();
//     const { container } = render(<AddProduct />);
//     fireEvent.click(container.querySelector("button"));
//     expect(result).toBeCalledTimes(0);
//   });
// });
