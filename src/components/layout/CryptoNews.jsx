 
import React, { useState } from "react";
import {  Select } from "antd";
import moment from "moment";

import CryptoLoader from "./CryptoLoader";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import CryptoGoBackTop from "./CryptoGoBackTop";
import cryptoImage from '../../assets/no-image.png'

import { makeStyles } from '@mui/styles';

import { 
  CryptoImageContainer, 
  CryptoImgPublisher, 
  CryptoNewsCard, 
  CryptoNewsContent, 
  CryptoNewsImg, 
  CryptoNewsLink, 
  CryptoNewsProvider, 
  CryptoNewsTitle, 
  CryptoPublisherLogo, 
  CryptoPublisherName, 
  CryptoPublisherTime, 
  CryptoSelect
} from "../styles/CryptoNewsStyled";
 
 
const { Option } = Select; 


  

const CryptoNews = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);

  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 100,
  });


  //  STYLES SECTION 
 const useStyles = makeStyles({
   select: {
     width: '50%', 
     minWidth: '300px'
   }
 })


 
  const classes = useStyles(); 

  return (
    <>
      {!cryptoNews?.value ? (
        <CryptoLoader />
      ) : (
        <>  
          <div>
            {!simplified && (
              <CryptoSelect>  

                  <Select 
                    className={classes.select}
                    placeholder="Selecionar por criptomoeda"
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
              </CryptoSelect>
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
                          alt="Noticiador" 
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

            <CryptoGoBackTop/>
          </div>
        </>
      )}
    </>
  );
};

export default CryptoNews;
