import styled from "styled-components";




export const CryptoTitle = styled.section `
  margin: 5% auto 10% auto;  
  text-align: center; 

  @media (max-width: 1085px){
    margin: 10% auto 15% auto;  
  }

  @media (max-width: 640px){
    margin: 18% 5%; 
  }
`;


export const CryptoLoadMore = styled.section `
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
`;