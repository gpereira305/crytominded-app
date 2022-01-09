 
import { Avatar, Card, Col, Row, Select, Typography } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { Loader } from ".";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import GoBackTop from "./GoBackTop";
import cryptoImage from '../assets/no-image.png'
import { CryptoImageContainer, CryptoImgPublisher, CryptoNewsCard, CryptoNewsContent, CryptoNewsImg, CryptoNewsLink, CryptoNewsProvider, CryptoNewsTitle, CryptoPublisherLogo, CryptoPublisherName, CryptoPublisherTime } from "./styles/CryptoNews";
 
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
          <div>
            {!simplified && (
              <div style={{display: 'flex', justifyContent: 'center'}}>
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
              </div>
            )}


           <CryptoNewsCard > 
            {cryptoNews.value.map((news, i) => (
                  <CryptoNewsLink href={news.url} target="_blank" rel="noopener noreferrer" key={i}>
                    <CryptoImageContainer title="Clique para mais detalhes">
                        <CryptoNewsImg
                          src={news?.image?.thumbnail?.contentUrl || cryptoImage}
                          alt="Critomoeda"
                        />
                      <CryptoNewsTitle>
                        {`${news.name.substring(0, 70)}...`}
                      </CryptoNewsTitle>
                    </CryptoImageContainer> 
                      <CryptoNewsContent>
                        {`${news.description.substring(0, 460)}...`}
                      </CryptoNewsContent>


                    <CryptoNewsProvider>
                      <CryptoImgPublisher>
                        <CryptoPublisherLogo
                          src={
                            news.provider[0]?.image?.thumbnail?.contentUrl ||
                            cryptoImage
                          }
                          alt="Provedor da noticia" 
                        />
                        <CryptoPublisherName title={news.provider[0]?.name}>
                          {`${news.provider[0]?.name.substring(0, 30)}...`}
                        </CryptoPublisherName>

                      </CryptoImgPublisher>
                      <CryptoPublisherTime>
                        {moment(news.datePublished).startOf("ss").fromNow()}
                      </CryptoPublisherTime>
                    </CryptoNewsProvider>
                  </CryptoNewsLink> 
            ))}
            </CryptoNewsCard>

            <GoBackTop/>
          </div>
        </>
      )}
    </>
  );
};

export default News;
