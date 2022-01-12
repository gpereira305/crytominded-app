import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import millify from "millify";  

import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography' 
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';   
 
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";  

import { useGetCryptosQuery } from "../../services/cryptoApi";
import CryptoGoBackTop from  "./CryptoGoBackTop"
import CryptoLoader from "./CryptoLoader"; 

import { 
  CryptoCard, 
  CryptoCardHr, 
  CryptoCardInner, 
  CryptoCardText, 
  CryptoGrid, 
  CryptoInput,  
} from "../styles/CryptoCurrenciesStyled"; 
 


 



const CryptoCurrencies = ({ simplified }) => {
  const count = simplified ? 12 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredCoin = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredCoin);
  }, [cryptosList, searchTerm]);

  // eleva ao top ao transitar páginas
  const goToTopImg = () =>{
    window.scrollTo({
      top: 0,   
    });
  };


//  STYLES SECTION 
 const useStyles = makeStyles({    
    h6Color: { 
      color: 'var(--tertiary)',
      textTransform: 'uppercase',
      fontWeight: 600,
    },

    cardTextH3: {
      color: 'var(--tertiary)',  
    }, 
   
    searchIcon: {
      position: 'absolute',
      bottom: '15px',
      right: '3%',
      color: 'rgba(0, 0, 0, 0.315)'
    }
  
 })
 

 const classes = useStyles(); 

 
  return (
    <>
      {isFetching ? (
        <CryptoLoader /> 
      ) : (
        <>
          {!simplified && (
            <CryptoInput>
                 <Box sx={{ width: 500, maxWidth: '100%'}}>
                  <TextField  
                    fullWidth label="Pesquisar criptomoeda..." 
                    id="fullWidth" 
                    onChange={(e) => 
                    setSearchTerm(e.target.value)}
                  />
                   <SearchIcon className={classes.searchIcon}/>
                  </Box> 
            </CryptoInput>
          )}  
                <CryptoGrid>
                    {cryptos?.map((currency, index) => (
                      <div key={index}>
                        <Link to={`/crypto/${currency.uuid}`} onClick={() => goToTopImg()}>

                          <CryptoCard>
                            <CryptoCardInner>
                              <Typography gutterBottom variant="h6" className={classes.h6Color}>
                                {currency.rank}. {currency.name.substring(0, 15)}
                              </Typography> 
                                <CardMedia
                                  className="crypto-image"
                                  component="img" 
                                  image={currency.iconUrl}
                                  alt="Criptomoeda"
                                  sx={{ maxWidth: 40}}
                                  title={currency.name}
                                />
                            </CryptoCardInner>

                            <CryptoCardHr></CryptoCardHr>
                            
                            <CryptoCardText>
                              <h4 className={classes.cardTextH3}>
                                <span style={{fontWeight: 500, color: 'var(--secondary)'}}>Valor atual:</span>{" "}
                                {`US$ ${millify(currency.price)}`}
                              </h4>

                              <h4 className={classes.cardTextH3}>
                              <span style={{fontWeight: 500, color: 'var(--secondary)'}}>Capital de mercado:</span>{" "} 
                                {`US$ ${millify(currency.marketCap)}`}
                              </h4>

                              <h4 className={classes.cardTextH3}> 
                              <span style={{fontWeight: 500, color: 'var(--secondary)'}}>Oscilação:</span>{" "}  
                                  <span className={`${ currency.change < 0 ? "colorRed" : "colorGreen"}`}>
                                    {`${currency.change}%`}
                                  </span>{" "}
                                  <span className={`${ currency.change < 0 ? "colorRed" : "colorGreen" }`}>
                                    {currency.change < 0 ? (
                                      <ArrowDownOutlined />
                                    ) : (
                                      <ArrowUpOutlined />
                                    )}
                                  </span>  
                              </h4>

                            </CryptoCardText> 
                          </CryptoCard> 
                        </Link>
                      </div>
                    ))}
              </CryptoGrid> 
          <CryptoGoBackTop />
        </>
      )}
    </>
  );
};

export default CryptoCurrencies;
