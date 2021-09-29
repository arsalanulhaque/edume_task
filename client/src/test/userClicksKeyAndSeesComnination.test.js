import Key from "../components/Key/Key";

import Keypad from "../components/Keypad/Keypad";
import Display, { DisplayText } from "../components/Display/Display";

import { shallow } from "enzyme";
import React from "react";
import * as redux from "react-redux";

describe("integration test", () => {
  test("user clicks key 2 twice and sees 9 combinations", () => {
    const useDispatchSpy = jest.spyOn(redux, "useDispatch");
    const useSelectorSpy = jest.spyOn(redux, "useSelector");

    const mockPayload = {
      payload: {
        combinations: ["aa", "ab", "ac", "ba", "bb", "bc", "ca", "cb", "cc"],
      },
    };
    const mockDispatchFn = jest.fn();

    useSelectorSpy.mockReturnValue(mockPayload);
    useDispatchSpy.mockReturnValue(mockDispatchFn);

    const buttonElement = shallow(<Keypad />)
      .find(Key)
      .at(1)
      .dive();

    buttonElement.simulate("click");
    buttonElement.simulate("click");

    const mockCalls = mockDispatchFn.mock.calls;
    const displayTextElements = shallow(<Display />).find(DisplayText);
    const firstDisplayText = displayTextElements.at(0).text();

    expect(mockCalls.length).toBe(2);
    expect(displayTextElements).toHaveLength(9);
    expect(firstDisplayText).toBe("aa");

    useDispatchSpy.mockClear();
  });
});
