import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, Loader, News } from ".";
import GoBackTop from "./GoBackTop";

const { Title } = Typography;

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(8);
  const globalStats = data?.data?.stats; 

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <div className="home-title">
            <Title level={3}>Estatística Global de Criptomoedas</Title>
            <br />
             <span style={{
               backgroundColor: '#dbdbdb',
               width: '100%',
               height: '1.5px',
               display: 'block'
             }}></span>
          </div> 
          <Cryptocurrencies simplified />  
          <div className="home-heading-container">
            <Title level={5}>
              <Link to="/cryptocurrencies" title="Ver mais criptomoedas"  className="show-more">
                Mostrar mais...
              </Link>
            </Title>
          </div>  
          <div className="home-title" style={{ marginTop: '10%'}}> 
              <Title level={3}>Últimas Notícias sobre criptomoedas</Title>
              <br />
              <span style={{
               backgroundColor: '#dbdbdb',
               width: '100%',
               height: '1.5px',
               display: 'block'
             }}></span>
          </div>

          <News simplified /> 
          <div className="home-heading-container"> 
            <Title level={5}>
              <Link to="/news" title="Ver mais notícias"  className="show-more">
                Mostrar mais...
              </Link>
            </Title>
          </div>
          <GoBackTop/>
        </>
      )}
    </>
  );
};

export default HomePage;
