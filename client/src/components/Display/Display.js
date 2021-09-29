import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Container } from "../../UI/Container";

export const DisplayContainer = styled(Container)`
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const DisplayText = styled.div`
  color: ${(props) => (props.deep ? "darkorchid" : "dodgerblue")};
  font-family: "Tahoma", sans-serif;
  margin-right: 30px;
  margin-bottom: 10px;
  height: 0.7rem;
`;

const Display = () => {
  const { payload } = useSelector((state) => state.predictions);
  const { predictions } = payload;

  return (
    <DisplayContainer>
      {predictions &&
        predictions.current.map((currentPredictions, index) => {
          return <DisplayText key={index}>{currentPredictions}</DisplayText>;
        })}
      {predictions &&
        predictions.deep.map((deepPredictions, index) => {
          return (
            <DisplayText deep key={index}>
              {deepPredictions}
            </DisplayText>
          );
        })}
    </DisplayContainer>
  );
};

export default Display;
