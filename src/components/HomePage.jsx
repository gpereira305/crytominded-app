import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, News } from ".";

const { Title } = Typography;

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(8);
  const globalStats = data?.data?.stats;

  return (
    <>
      {isFetching ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>Carregando, aguarde...</h1>
        </div>
      ) : (
        <>
          <Title level={3} className="heading">
            Global Crypto Stats
          </Title>
          <Row>
            <Col span={12}>
              <Statistic title="Total de Cryptos" value={globalStats.total} />
            </Col>
            <Col span={12}>
              <Statistic
                title="Total de Câmbios"
                value={millify(globalStats.totalExchanges)}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Total de Capital Mercados"
                value={millify(globalStats.totalMarketCap)}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Total de Volumes em 24hr"
                value={millify(globalStats.total24hVolume)}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Total de Mercados"
                value={millify(globalStats.totalMarkets)}
              />
            </Col>
          </Row>

          <div className="home-heading-container">
            <Title level={3} className="home-title">
              Top 8 Crypto Moedas mundiais
            </Title>
            <Title level={5} className="show-more">
              <Link to="/cryptocurrencies" title="Ver mais moedas">
                Mostrar mais
              </Link>
            </Title>
          </div>
          <Cryptocurrencies simplified />
          <div className="home-heading-container">
            <Title level={3} className="home-title">
              Notícias
            </Title>
            <Title level={5} className="show-more">
              <Link to="/news" title="Ver mais moedas">
                Mostrar mais
              </Link>
            </Title>
          </div>
          <News />
        </>
      )}
    </>
  );
};

export default HomePage;
