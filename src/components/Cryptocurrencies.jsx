import { Card, Col, Input, Row } from "antd";
import millify from "millify";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 8 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredCoin = cryptosList?.data?.coins.filter((coin) => {
      return coin.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setCryptos(filteredCoin);
  }, [cryptosList, searchTerm]);

  return (
    <>
      {isFetching ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>Carregando, aguarde...</h1>
        </div>
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
          <Row gutter={[32, 32]} className="crypto-card-container">
            {cryptos?.map((currency) => (
              <Col
                xs={24}
                sm={12}
                lg={6}
                className="crypto-card"
                key={currency.id}
              >
                <Link to={`/crypto/${currency.id}`}>
                  <Card
                    title={`${currency.rank}. ${currency.name}`}
                    extra={
                      <img
                        className="crypto-image"
                        src={currency.iconUrl}
                        alt="Crypto moeda"
                        title={currency.name}
                      />
                    }
                    hoverable
                    bordered={false}
                  >
                    <p>Valor atual: {millify(currency.price)}</p>
                    <p>Capital de mercado: {millify(currency.marketCap)}</p>
                    <p>Oscilação: {millify(currency.change)}</p>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default Cryptocurrencies;
