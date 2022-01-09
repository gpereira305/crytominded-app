import styled from "styled-components";




export const CryptoNewsCard = styled.div ` 
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    grid-gap: 20px; 
    margin-top: 5%; 

    @media (max-width: 1097px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 801px) {
      grid-template-columns: repeat(1, 1fr);
    }
`;

export const CryptoNewsLink = styled.a `
   padding: 20px;
   background: var(--light-gray);  
   color: var(--light-black);
   border-radius: 5px;
   min-height: 38vh;
   position: relative; 

   &:hover { 
    color: var(--light-black);
  }
`; 

export const CryptoImageContainer = styled.div `
    display: flex ;
    align-items: center;
    margin-bottom: 20px;
`;

export const CryptoNewsContent = styled.p`
   margin-bottom: 40px;
`;


export const CryptoNewsImg = styled.img`
    width: 75px; 
    border-radius: 100%;
    margin-right: 15px;
`;

export const CryptoNewsTitle = styled.h3`
    color: var(--secondary); 
`;

export const CryptoNewsProvider = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: end;
  bottom: 20px;
  width: 90%;
`;

export const CryptoImgPublisher = styled.div `
  display: flex;
  align-items: self-end;
`;


export const CryptoPublisherLogo = styled.img `
   max-width: 35px;
   margin-right: 10px;
`;

export const CryptoPublisherName = styled.p`
   color: var(--tertiary);
`;

export const CryptoPublisherTime = styled.small `
  font-style: italic;
  color: #a1a3a9;
`;
