import React from "react";
import { shallow } from "enzyme";
import Key from "./Key";

describe("Key", () => {
  it("renders without crashing", () => {
    shallow(<Key />);
  });
});
