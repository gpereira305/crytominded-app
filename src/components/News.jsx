/* eslint-disable jsx-a11y/anchor-has-content */
import { Avatar, Card, Col, Row, Select, Typography } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const { Text, Title } = Typography;
const { Option } = Select;
const cryptoImage =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);

  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 5 : 18,
  });

  console.log(cryptoNews);

  return (
    <>
      {!cryptoNews?.value ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>Carregando, aguarde...</h1>
        </div>
      ) : (
        <>
          <Row gutter={[24, 24]}>
            {!simplified && (
              <Col span={24}>
                <Select
                  className="select-news"
                  placeholder="Filtar por crypto moeda"
                  optionFilterProp="children"
                  onChange={(value) => setNewsCategory(value)}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase())
                  }
                  showSearch
                >
                  <Option value="Cryptocurrency">Crypto Moeda</Option>
                  {data?.data?.coins.map((coin) => (
                    <Option value={coin.name}>{coin.name}</Option>
                  ))}
                </Select>
              </Col>
            )}
            {cryptoNews.value.map((news, i) => (
              <Col xs={24} sm={12} lg={8} key={i}>
                <Card className="news-card" hoverable>
                  <a href={news.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={news?.image?.thumbnail?.contentUrl || cryptoImage}
                      alt="Cryto moeda"
                    />
                    <div className="news-image-container">
                      <Title className="news-title" level={5}>
                        {news.name}
                      </Title>
                    </div>
                    <p>
                      {news.description > 100
                        ? `${news.description.substring(0, 100)}...`
                        : news.description}
                    </p>
                    <div className="provider-container">
                      <div>
                        <Avatar
                          src={
                            news.provider[0]?.image?.thumbnail?.contentUrl ||
                            cryptoImage
                          }
                          alt="Provedor da noticia"
                        />
                        <Text className="provider-name" italic>
                          {news.provider[0]?.name}
                        </Text>
                      </div>
                      <Text type="secondary">
                        {moment(news.datePublished).startOf("ss").fromNow()}
                      </Text>
                    </div>
                  </a>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default News;
