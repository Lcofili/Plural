import React from 'react'
import styled from "styled-components"

const InputAxios = () => {
  return (
    <Container>
      <Wrapper>
        <input />
        <input />
        <input />

      </Wrapper>
      <button type= "danger" >Register</button>
    </Container>
  )
}

export default InputAxios

const Container = styled.div``;
const Wrapper = styled.div``;
const input = styled.div``;