/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Collapse, Row, Select, Table, Typography } from "antd";
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";
import fallbackLogo from "../assets/no-logo.jpg";
import {
  CheckOutlined,
  DollarCircleOutlined,
  ExclamationCircleOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  NumberOutlined,
  StopOutlined,
  ThunderboltOutlined,
  TrophyOutlined,
  LinkOutlined,
} from "@ant-design/icons/lib/icons";
import moment from "moment";

const { Title, Text } = Typography;
const { Option } = Select;
const { Panel } = Collapse;

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const cryptoDetails = data?.data?.coin;

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: "N. de mercados",
      value:
        cryptoDetails?.numberOfMarkets &&
        millify(cryptoDetails.numberOfMarkets),
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails.marketCap)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails.allTimeHigh.price)
      }`,
      icon: <TrophyOutlined />,
    },
  ];

  // const genericStats = [
  //     {
  //       title: "Number Of Markets",
  //       value: cryptoDetails?.numberOfMarkets,
  //       icon: <FundOutlined />,
  //     },
  //     {
  //       title: "Number Of Exchanges",
  //       value: cryptoDetails?.numberOfExchanges,
  //       icon: <MoneyCollectOutlined />,
  //     },
  //     {
  //       title: "Aprroved Supply",
  //       value: cryptoDetails?.approvedSupply ? (
  //         <CheckOutlined />
  //       ) : (
  //         <StopOutlined />
  //       ),
  //       icon: <ExclamationCircleOutlined />,
  //     },
  //     {
  //       title: "Total Supply",
  //       value: `$ ${millify(cryptoDetails?.totalSupply)}`,
  //       icon: <ExclamationCircleOutlined />,
  //     },
  //     {
  //       title: "Circulating Supply",
  //       value: `$ ${millify(cryptoDetails?.circulatingSupply)}`,
  //       icon: <ExclamationCircleOutlined />,
  //     },
  // ];

  // sdsdsds
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
    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        <div>
          {cryptoDetails?.iconUrl ? (
            <img
              src={cryptoDetails?.iconUrl}
              alt="Criptomoeda"
              style={{ maxWidth: "100px" }}
            />
          ) : (
            <img
              src={fallbackLogo}
              alt="Criptomoeda logo"
              style={{ maxWidth: "100px" }}
            />
          )}
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
      </Collapse>
      {/* bottom region */}
      <Select
        defaultValue="7d"
        placeholder="Selecione um período"
        className="select-timeperiod"
        onChange={(value) => setTimePeriod(value)}
      >
        {time.map((date, index) => (
          <Option key={index}>{date}</Option>
        ))}
      </Select>
      <Col className="stats-container">
        <Col className="coin-value-statistics-heading">
          <Title level={4} className="coin-details-heading">
            Valor de estastítica do {cryptoDetails?.name}
          </Title>
          <p>
            Um overview da estatística do {cryptoDetails?.name} ao logo do tempo
          </p>
        </Col>
        <Table dataSource={dataSource} columns={columns} />
      </Col>
    </Col>
  );
};

export default CryptoDetails;
