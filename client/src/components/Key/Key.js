import React from "react";
import styled from "styled-components";

export const Button = styled.div`
  border-radius: 15%;
  cursor: pointer;
  background-color: #eaeaea;
  display: flex;
  flex-direction: column;
  width: 70px;
  height: 50px;
  font-family: "Tahoma", sans-serif;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  &:hover {
    background-color: gray;
  }
`;

const Text = styled.div`
  color: blue;
  text-align: center;
`;

const TopDisplayText = styled(Text)`
  margin-top: .5rem;
  font-size: 1rem;
`;

const BottomDisplayText = styled(Text)`
  font-size: .7rem;
`;

const Key = ({ bottomDisplay, topDisplay, onKeyClick, number }) => {
  const handleKeyClick = (e) => {
    onKeyClick(number);
  };

  return (
    <Button onClick={handleKeyClick}>
      <TopDisplayText>{topDisplay}</TopDisplayText>
      <BottomDisplayText>{bottomDisplay}</BottomDisplayText>
    </Button>
  );
};

export default Key;
