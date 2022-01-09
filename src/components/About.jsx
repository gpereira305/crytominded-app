import React from "react";
import { CryptoAboutText, CryptoTitle } from "./styles/AboutStyled";
import Typography from '@mui/material/Typography' 
import { makeStyles } from '@mui/styles'; 





const About = () => {



//  STYLES SECTION 
const useStyles = makeStyles({    
  titleH4: {
    background: 'linear-gradient(87deg, rgba(31,57,159,1) 0%, rgba(113,11,194,1) 43%, rgba(230,0,122,1) 83%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    textAlign: 'center'
  }, 

})


const classes = useStyles();

  return (
    <div>
      <CryptoTitle>
      <Typography variant="h4" gutterBottom className={classes.titleH4}>
         Sobre o Cryptominded
      </Typography> 
      </CryptoTitle> 
      <br /> 
      <CryptoAboutText>  
        O app Cryptominded foi feito com o objetivo em poder prover ao usuário que tem
          interesse em saber tudo sobre o mundo do Blockchain e critomoedas. 
          Através do app é possível acompanhar em tempo real as posições, valores, cotações e históricos
          sobre as criptomoeadas mais relevantes do momento. 
          Também é possível se interar das últimas notícias relacionadas a essa nova forma de câmbio 
          desentralizado ao redor do mundo, visitar suas redes socias e site oficial para mais detalhes e atualizaões. 
      </CryptoAboutText>
    </div>
  );
};

export default About;
