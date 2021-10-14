import React from "react";
import styled from "styled-components";
import Image1 from "./ProductImage/design 36.jpeg";

const InputScreen = () => {
  return (
    <Container>
      <Wrapper>
        <ProductImage src={Image1} />
        <BookTitle>
          <Title> Teacher Chike</Title>
        </BookTitle>
        <CatBox>
          <Category>Literature</Category>
          <Description>
            {" "}
            Teacher Chike The Prof who teaches with venom but crack jokes with
            80% of his class...
          </Description>
        </CatBox>
        <Account>
          <AmountDetails> Price</AmountDetails>
          <Amount>2500</Amount>
        </Account>
      </Wrapper>
    </Container>
  );
};

export default InputScreen;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  background-color: blueviolet;
  border-radius: 10px;
`;
const ProductImage = styled.img``;
const AmountDetails = styled.div``;
const Amount = styled.div``;
const Account = styled.div``;
const CatBox = styled.div``;
const Category = styled.div``;
const Title = styled.div``;
const BookTitle = styled.div``;
const Description = styled.div``;
