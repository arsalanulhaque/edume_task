import React from "react";
import { shallow } from "enzyme";
import Keypad from "./Keypad";
import Key from "../Key/Key";
import * as redux from "react-redux";

let spy;

beforeEach(() => {
  spy = jest.spyOn(redux, "useDispatch");

  spy.mockClear();
});

describe("Keypad", () => {
  it("renders without crashing", () => {
    spy.mockReturnThis();

    shallow(<Keypad />);
  });

  it("renders 12 Key components", () => {
    spy.mockReturnThis();

    const wrapper = shallow(<Keypad />);
    expect(wrapper.find(Key).length).toEqual(12);
  });
});
