import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Input, Row } from "antd";
import millify from "millify";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import GoBackTop from "./GoBackTop";
import Loader from "./Loader";

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

          <Row gutter={[16  , 16  ]} className="crypto-card-container">
            {cryptos?.map((currency, index) => (
              <Col xs={24} sm={12} lg={6} className="crypto-card" key={index}>
                <Link to={`/crypto/${currency.uuid}`}>
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
                    <p>Valor atual: {`US$ ${millify(currency.price)}`}</p>
                    <p>Capital de mercado: {`US$ ${millify(currency.marketCap)}`}</p> 
                     <div>Oscilação: {" "}
                       <span className={`${currency.change < 0 ? 'colorRed' : 'colorGreen'}`}>{`${currency.change}%`}</span> {" "}
                       <span className={`${currency.change < 0 ? 'colorRed' : 'colorGreen'}`}>
                          {
                          currency.change < 0 ? (
                            <ArrowDownOutlined />
                          ) : (
                            <ArrowUpOutlined />
                          )
                          
                          }
                       </span>
                     </div>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
          <GoBackTop/>
        </>
      )}
    </>
  );
};

export default Cryptocurrencies;
