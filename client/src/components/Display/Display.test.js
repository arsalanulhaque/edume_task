import React from "react";
import { shallow } from "enzyme";
import * as redux from "react-redux";
import Display from "./Display";

const spy = jest.spyOn(redux, "useSelector");
spy.mockReturnValue({ payload: { combinations: [] } });

describe("Display", () => {
  it("renders without crashing", () => {
    shallow(<Display />);
  });
});
