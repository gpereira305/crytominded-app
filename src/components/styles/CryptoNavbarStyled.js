import styled from "styled-components"; 



export const NavContainer = styled.section `
   display : flex;
   align-items: center;
   position: fixed;
   padding: 10px 27px;
   width: 100%;
   z-index: 100; 
   background: #fff;    
   box-shadow: 0px 8px 44px rgb(0 0 0 / 8%);
`;

export const NavInnerContainer = styled.nav `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
`;

export const NavInner = styled.h1` 
    > a { 
      background: linear-gradient(87deg, rgba(31,57,159,1) 0%, rgba(113,11,194,1) 43%, rgba(230,0,122,1) 83%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      &:hover {  
        background: linear-gradient(87deg, rgba(31,57,159,1) 0%, rgba(113,11,194,1) 43%, rgba(230,0,122,1) 83%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }  

    @media (max-width: 801px){
      font-size: 1.1rem;
    }
`;
 
 

export const NavBarMenu = styled.div`
   display: flex;
   justify-content: space-between;
   min-width: 535px; 
   
   

   @media (max-width: 1085px) {
    min-width: 490px;  
   } 

    @media (max-width: 801px){ 
      transition:  all ease-in .3s; 
      flex-direction: column;
      position: absolute;  
      height: 100vh;
      bottom: 0;
      top: 50px;
      right: -100%;
      width: 100%;  
      padding: 0 15px;
      justify-content: flex-start; 
      background: #fff;   
      box-shadow:  0px 15px 15px 0px rgb(0 0 0 / 6%);
   }  

   @media (max-width: 520px){
     min-width: 100%;
   }
`;


export const NavbarWrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 801px){
    flex-direction: column;
    justify-content: space-around;
    height: 45%;
  }
`; 

export const NavBarItem = styled.h4`  
  transition: all ease .3s;

  &:hover { 
     transform: translateY(-5px);
  } 
`;


export const NavMenuIcon = styled.div`
   display: none ;
   position: absolute ;
   right: -6px;
   z-index: 100;
   top: 4px; 
   cursor: pointer;

   @media (max-width: 801px){
     display: block;
   } 
`;