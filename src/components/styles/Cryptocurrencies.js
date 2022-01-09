import styled from "styled-components";

  
 

export const CryptoGrid = styled.div `
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  grid-gap: 20px; 

  @media (max-width: 1500px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1085px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
    margin: auto;
  }
`;

export const CryptoCard = styled.div ` 
      position: relative;
      max-width: 445px;
      min-height: 230px;
      padding: 20px; 
      border-radius: 10px;  
      box-shadow:  0px 15px 15px 0px rgb(0 0 0 / 6%);
      transition: all ease .3s;

      &:hover {
        transform: translateY(-5px);
        box-shadow:  0px 30px 30px 0px rgb(0 0 0 / 15%);
      }

      @media (max-width: 640px) { 
         margin: auto;
     }

`;

export const CryptoCardInner = styled.div` 
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 60px; 
`;

export const CryptoCardText = styled.div` 
      position: absolute;
      bottom: 20px;
      min-height: 90px;
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: space-between; 
`;


export const CryptoCardHr = styled.span` 
       width: 100%;
       height: 2px;
       background-color: var(--light-gray);
       display: block;
       margin-top: 10px;
`;
 


 