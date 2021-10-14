import React from "react";
import styled from "styled-components";

const Flow = () => {
  return (
    <Container>
      <Wrapper>
        <button>Click</button>
        <input />
      </Wrapper>
    </Container>
  );
};

export default Flow;

const Container = styled.div``;
const Wrapper = styled.div`
  color: green;
  background-color: red;
`;

const button = styled.button`
  color: darkgreen;
`;
