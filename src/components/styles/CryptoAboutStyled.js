import styled from "styled-components";




export const CryptoTitle = styled.div` 
  margin-top: 5%;
  min-height: 8vh; 

  @media (max-width: 1085px){
    margin: 10% auto 5% auto;  
  }

  @media (max-width: 640px){
    margin-top: 18%; 
  }
`;


export const CryptoAboutText = styled.h5`
  min-height: 100vh;
  margin: auto!important;
  max-width: 70%;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.5px;
  color: var(--dark-gray);

  @media (max-width: 997px){
    max-width: 95%;
  }
`;