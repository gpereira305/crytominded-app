import styled from "styled-components";




export const CryptoTitle = styled.div `
  margin: 5%;  
  text-align: center; 
`


export const CryptoLoadMore = styled.div `
  display: flex;
  justify-content: center;
  margin-top: 35px;
  
  > a {
    color: #9769f2;
    transition: all ease .3s;

    &:hover {
        transform: translateY(-5px); 
      }
  }
`