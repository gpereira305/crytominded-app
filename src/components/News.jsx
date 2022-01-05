/* eslint-disable jsx-a11y/anchor-has-content */
import { Avatar, Card, Col, Row, Select, Typography } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { Loader } from ".";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import GoBackTop from "./GoBackTop";
import cryptoImage from '../assets/no-logo.jpg'

const { Text, Title } = Typography;
const { Option } = Select; 

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);

  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 100,
  });

  return (
    <>
      {!cryptoNews?.value ? (
        <Loader />
      ) : (
        <> 

          <Row gutter={[24, 24]}>
            {!simplified && (
              <Col span={24} style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{ width: '35%'}}>
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
                      <Option value="Cryptocurrency">CriptoMoeda</Option>
                      {data?.data?.coins.map((coin, index) => (
                        <Option value={coin.name} key={index}>
                          {coin.name}
                        </Option>
                      ))}
                    </Select>
                </div>
              </Col>
            )}
            {cryptoNews.value.map((news, i) => (
              <Col xs={24} sm={12} lg={8} key={i}>
                <Card className="news-card" hoverable>
                  <a href={news.url} target="_blank" rel="noopener noreferrer">
                    <div className="news-image-container">
                    <img
                      src={news?.image?.thumbnail?.contentUrl || cryptoImage}
                      alt="Critomoeda"
                    />
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

            <GoBackTop/>
          </Row>
        </>
      )}
    </>
  );
};

export default News;
