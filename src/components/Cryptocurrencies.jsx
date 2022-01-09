import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import millify from "millify";  

import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography' 
import { makeStyles } from '@mui/styles';   

import {   Input } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";  

import { useGetCryptosQuery } from "../services/cryptoApi";
import GoBackTop from "./GoBackTop";
import Loader from "./Loader"; 
import { CryptoCard, CryptoCardHr, CryptoCardInner, CryptoCardText, CryptoGrid } from "./styles/Cryptocurrencies";
 


 



const Cryptocurrencies = ({ simplified }) => {
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

 })
 

 const classes = useStyles(); 
  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          {!simplified && (
            <div className="search-crypto">
              <Input
                type="search"
                placeholder="Pesquisar cryptos..."
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          )}
           <CryptoGrid>
              {cryptos?.map((currency, index) => (
                <div key={index}>
                  <Link to={`/crypto/${currency.uuid}`}>

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

          <GoBackTop />
        </>
      )}
    </>
  );
};

export default Cryptocurrencies;
