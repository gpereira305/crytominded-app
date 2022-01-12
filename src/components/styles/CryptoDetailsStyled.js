import styled from "styled-components"; 


export const CryptoDetailHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
  margin: 30px;
  gap: 3px;

  > img {
    cursor: pointer;
    width: 115px;

    @media (max-width: 890px){
      width: 85px;
    }
  }

  @media (max-width: 1085px){
    margin: 10% auto 15% auto;  
  }

  @media (max-width: 640px){
    margin: 18% 5%; 
  }
`;

export const CryptoDetailCoin = styled.h1`
   font-weight: 900; 
   font-size: 2rem;
  background: linear-gradient(87deg, rgba(31,57,159,1) 0%, rgba(113,11,194,1) 43%, rgba(230,0,122,1) 83%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

    @media (max-width: 890px){
      font-size: 1.5rem!important;
    }
`;


export const CryptoDetailSubTitle = styled.h3`
   color: var(--secondary);

   @media (max-width: 640px){
    font-size: .8rem;
  }
`;




export const AccordionTitle = styled.h3`
   color: var(--secondary); 
   text-transform: uppercase; 

   @media (max-width: 890px){
    font-size: .8rem;
   }
`; 

export const AccordionLinks = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;

    @media (max-width: 890px){
      width: 100%;
    }

    > h4 {
      color: var(--secondary);
      padding-bottom: 5px;
    }

    > a {
      color: var(--tertiary); 
      text-decoration: underline; 
      transition: all ease .3s;

      
    }
`; 


export const AccordionDataTitle = styled.h2`
 color: var(--secondary);
 margin-bottom: 5px!important;
`;