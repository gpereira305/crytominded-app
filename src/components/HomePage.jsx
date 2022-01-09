import React, { useState } from "react";  
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, Loader, News } from "."; 
import GoBackTop from "./GoBackTop";  
import { makeStyles } from '@mui/styles'; 
import Typography from '@mui/material/Typography' 
import { CryptoLoadMore, CryptoTitle } from "./styles/HomePageStyled.js";
 



//  STYLES SECTION 
const useStyles = makeStyles({    
  titleH4: { 
    background: 'linear-gradient(87deg, rgba(31,57,159,1) 0%, rgba(113,11,194,1) 43%, rgba(230,0,122,1) 83%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent'
  },
  loadLink: {
    fontSize: 16,
    color: 'var(--secondary)!important', 
    borderBottom: '2px solid var(--secondary)', 

    '&:hover': {
      color: 'var(--tertiary)!important ', 
      borderBottom: '2px solid var(--tertiary)'
     
    }
  }

})
 



const HomePage = () => {
  const {  isFetching } = useGetCryptosQuery(8);  
  const classes = useStyles(); 

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <CryptoTitle> 
                <Typography variant="h4" gutterBottom className={classes.titleH4}>
                   Estatística Global de Criptomoedas
                </Typography>
          </CryptoTitle> 
 
          <Cryptocurrencies simplified />  
          <CryptoLoadMore> 
              <Link to="/cryptocurrencies" title="Ver mais criptomoedas" className={classes.loadLink}>
                Mostrar mais...
              </Link> 
          </CryptoLoadMore>  

          <CryptoTitle> 
                <Typography variant="h4" gutterBottom  className={classes.titleH4}>
                Últimas Notícias Sobre Criptomoedas
              </Typography>
          </CryptoTitle>  

          <News simplified /> 
          <CryptoLoadMore>  
              <Link to="/news" title="Ver mais notícias" className={classes.loadLink}>
                Mostrar mais...
              </Link> 
          </CryptoLoadMore>
          <GoBackTop/>
        </>
      )}
    </>
  );
};

export default HomePage;
