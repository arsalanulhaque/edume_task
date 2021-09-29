import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { numberLetterMapping } from "../../utils/constants";
import Key from "../Key/Key";
import { Container } from "../../UI/Container";
import { getPredictions } from "../../flux/actions/predictions";

const Keypad = () => {
  let [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const handleTyping = (key) => {
    setNumber((number += key));
    dispatch(getPredictions(number));
  };

  const keys = numberLetterMapping;

  return (
    <Container>
      {keys.map((key, index) => {
        const { topDisplay, bottomDisplay, number } = key;
        const props = {
          number,
          topDisplay,
          bottomDisplay,
          onKeyClick: handleTyping,
        };
        return <Key key={index} {...props} />;
      })}
    </Container>
  );
};

export default Keypad;
