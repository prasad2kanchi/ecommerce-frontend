import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import AccountInfo from "../components/Account/AccountInfo";

describe("<AccountInfo/>", () => {
  it("it renders account correctly", () => {
    const tree = renderer.create(<AccountInfo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("it renders 2 correctly add", () => {
    const result = jest.fn();
    const { container } = render(<AccountInfo />);
    fireEvent.click(container.querySelector("button"));
    expect(result).toBeCalledTimes(0);
  });
});
