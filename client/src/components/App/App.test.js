import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Keypad from "../Keypad/Keypad";
import Display from "../Display/Display";

describe("App", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders the Display and Keypad components", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Keypad).length).toEqual(1);
    expect(wrapper.find(Display).length).toEqual(1);
  });
});
