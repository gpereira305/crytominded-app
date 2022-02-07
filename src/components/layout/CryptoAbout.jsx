import React from "react";
import { CryptoAboutText, CryptoTitle } from "../styles/CryptoAboutStyled";
import Typography from '@mui/material/Typography' 
import { makeStyles } from '@mui/styles'; 





const CryptoAbout = () => {



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
    <section>
      <CryptoTitle>
      <Typography variant="h4" gutterBottom className={classes.titleH4}>
         Sobre o Cryptominded
      </Typography> 
      </CryptoTitle> 
      <br /> 
      <CryptoAboutText>  
         O app <em>Cryptominded</em> foi feito com o intuíto em poder prover aos seus usuários que têm
          interesse em conhecer tudo sobre o mundo do Blockchain e critomoedas. 
          Através desse app será possível acompanhar todas as posições das criptomoedas mais relavantes do mercado mundial, 
          seus valores, cotações e históricos ao longo de sua criação. 
          Também é possível se interar das últimas notícias relacionadas à esse mercado, visitar seus sites oficiais e
          redes sociais para mais detalhes e atualizaões. 
      </CryptoAboutText>
    </section>
  );
};

export default CryptoAbout;
