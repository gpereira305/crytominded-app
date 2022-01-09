/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Collapse, Select, Table, Typography } from "antd";
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";
import { GlobalOutlined, LinkOutlined } from "@ant-design/icons/lib/icons";
import Loader from "./Loader";
import cryptoImage from '../assets/no-image.png'
import GoBackTop from "./GoBackTop";

const { Title, Text } = Typography;
const { Panel } = Collapse;

const CryptoDetails = () => {
  const { coinId } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const cryptoDetails = data?.data?.coin;
 

 

  // Table data
  const dataSource = [
    {
      key: "1",
      cryptoTitle: "Preço em dólar ",
      value: `US$ ${cryptoDetails?.price && millify(cryptoDetails.price)}`,
      address: "10 Downing Street",
    },
    {
      key: "2",
      cryptoTitle: "Ranking",
      value: `${cryptoDetails?.rank}º posição`,
      address: "10 Downing Street",
    },
    {
      key: "3",
      cryptoTitle: "Número de mercados",
      value:
        cryptoDetails?.numberOfMarkets &&
        millify(cryptoDetails.numberOfMarkets),
      address: "10 Downing Street",
    },
    {
      key: "4",
      cryptoTitle: "Maior valor atingido",
      value: `US$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails.marketCap)
      }`,
      address: "10 Downing Street",
    },
    {
      key: "5",
      cryptoTitle: "Capital de mercado",
      value: `US$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails.allTimeHigh.price)
      }`,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      cryptoTitle: `Price to USD`,
      dataIndex: "cryptoTitle",
      key: "cryptoTitle",
    },
    {
      cryptoTitle: "",
      dataIndex: "value",
      key: "value",
    },
  ];

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <Col className="coin-detail-container">
          <Col className="coin-heading-container">
            <div>
              <img
                src={cryptoDetails?.iconUrl || cryptoImage }
                alt="Criptomoeda"
                style={{ maxWidth: "100px" }}
              />
            </div>
            <Title level={2} className="coin-name">
              {cryptoDetails?.name} ({cryptoDetails?.symbol})
            </Title>
            <p>
              Atualmente 1 {cryptoDetails?.name} equivale a US${" "}
              {cryptoDetails?.price && millify(cryptoDetails?.price)}
            </p>
          </Col>
          {/* collapse */}
          <Collapse accordion ghost>
            <Panel header={`O que é ${cryptoDetails?.name}`} key="1">
              <span>
                {cryptoDetails?.description &&
                  HTMLReactParser(cryptoDetails?.description)}
              </span>
              <br />
              <Text underline>
                <a
                  href={cryptoDetails?.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkOutlined /> Visitar site oficial
                </a>
              </Text>
            </Panel>
            <Panel header="Links úteis" key="2">
              {cryptoDetails?.links.map((link, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "50%",
                    margin: "auto",
                  }}
                >
                  <Title level={5} style={{ textTransform: "capitalize" }}>
                    <GlobalOutlined /> {link.type}
                  </Title>{" "}
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "underline" }}
                    title="Visitar site"
                  >
                    <LinkOutlined /> {link.name}
                  </a>
                </div>
              ))}
            </Panel>
          </Collapse>

          <Col className="stats-container">
            <Col className="coin-value-statistics-heading">
              <Title level={4} className="coin-details-heading">
                Dados estastíticos sobre {cryptoDetails?.name}
              </Title>
            </Col>
            <Table dataSource={dataSource} columns={columns} />
          </Col>
        </Col>
      )}
      <GoBackTop/>
    </>
  );
};

export default CryptoDetails;
