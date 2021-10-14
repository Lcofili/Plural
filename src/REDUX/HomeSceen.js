import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { addCount, minusCount, myText } from "./Global/Context";

import { useDispatch, useSelector } from "react-redux";

const HomeSceen = () => {
  const [data, setData] = useState(0);

  const dispatch = useDispatch();

  const file = useSelector((state) => state.myReducer.count);
  const file1 = useSelector((state) => state.myReducer.luckey);

  console.log("data: ", file);

  const Add = () => {
    // setData(data + 1);
    dispatch(addCount());
  };
  const Minus = () => {
    // setData(data - 1);
    dispatch(minusCount());
  };

  // useEffect(() => {
  //   setCount()
  // });
  return (
    <Container>
      <Wrapper>
        <p>Develop Me</p>
        <Counter>{file}</Counter>
        <Counter>{file1}</Counter>
        <myButton>
          <button
            type="danger"
            onClick={() => {
              dispatch(addCount());
            }}
          >
            Plus
          </button>
          <button
            type="primary"
            onClick={() => {
              dispatch(minusCount());
            }}
          >
            Minus
          </button>
        </myButton>
      </Wrapper>
    </Container>
  );
};

export default HomeSceen;

const Wrapper = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  /* margin-top: 40px; */
`;
const Container = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellowgreen;
`;
const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 80px;
  font-weight: bolder;
  font-size: 70px;
  /* background-color: darkblue; */
  /* margin-top: 280px; */
`;

const myButton = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  justify-content: space-between;
`;
