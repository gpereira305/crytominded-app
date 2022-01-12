/* eslint-disable jsx-a11y/anchor-has-content */
import React  from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { GlobalOutlined, LinkOutlined } from "@ant-design/icons/lib/icons";
import { Col, Table,  } from "antd";

import { useGetCryptoDetailsQuery } from "../../services/cryptoApi";
import CryptoLoader from "./CryptoLoader";
import cryptoImage from '../../assets/no-image.png'
import CryptoGoBackTop from "./CryptoGoBackTop";


import { makeStyles } from '@mui/styles'; 
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails'; 

import {
   AccordionDataTitle, 
   AccordionLinks, 
   AccordionTitle, 
   CryptoDetailCoin, 
   CryptoDetailHeader, 
   CryptoDetailSubTitle 
} from "../styles/CryptoDetailsStyled";
 

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: 'var(--dark-pink)' }}/>}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(0, 0, 0, .03)'
      : 'rgba(255, 255, 255, .05)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  background: 'rgb(232, 233, 236)'
}));




const CryptoDetails = () => {
  const { coinId } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const cryptoDetails = data?.data?.coin;


  // STYLES SECTION
  const useStyles = makeStyles({
    accordionContent: {
      color: 'var(--dark-gray)', 
    },
    accordionLink: {
      color: 'var(--tertiary)',  

      '&:hover': {
        color: 'var(--tertiary)!important ', 
        borderBottom: '1.5px solid var(--tertiary)', 
      }
    },  
  })
  

  // Table data
  const dataSource = [
    {
      key: "1",
      cryptoTitle: "Preço em dólar ",
      value: `US$ ${cryptoDetails?.price && millify(cryptoDetails.price)}`,
      valueType: 'number'
      
    },
    {
      key: "2",
      cryptoTitle: "Ranking",
      value: `${cryptoDetails?.rank}º posição`,
      
    },
    {
      key: "3",
      cryptoTitle: "Número em mercados",
      value:
        cryptoDetails?.numberOfMarkets &&
        millify(cryptoDetails.numberOfMarkets),
      
    },
    {
      key: "4",
      cryptoTitle: "Maior valor atingido",
      value: `US$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails.marketCap)
      }`,
      
    },
    {
      key: "5",
      cryptoTitle: "Capital de mercado",
      value: `US$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails.allTimeHigh.price)
      }`,
      
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



  const classes = useStyles(); 

  return (
    <>
      {isFetching ? (
        <CryptoLoader />
      ) : (
        <Col>
          <CryptoDetailHeader> 
              <img
                src={cryptoDetails?.iconUrl || cryptoImage }
                alt="Criptomoeda" title={cryptoDetails?.name}
              /> 
            <CryptoDetailCoin>
              {cryptoDetails?.name} ({cryptoDetails?.symbol})
            </CryptoDetailCoin>
            <CryptoDetailSubTitle>
              Atualmente 1 {cryptoDetails?.name} equivale a US${" "}
              {cryptoDetails?.price && millify(cryptoDetails?.price)}
            </CryptoDetailSubTitle>
          </CryptoDetailHeader>



          {/* Accordion */}
          <Accordion TransitionProps={{ unmountOnExit: true }} 
            style={{ borderTop: 0, borderLeft: 0 , borderRight: 0, borderBottom: '1px solid #0000001f'}}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <AccordionTitle>{`O que é ${cryptoDetails?.name}`}</AccordionTitle>
            </AccordionSummary>

            <AccordionDetails className={classes.accordionContent}> 
                {cryptoDetails?.description &&
                  HTMLReactParser(cryptoDetails?.description)
                } 
                 <br /> 
                 <br /> 
                 <br /> 
                <a
                  href={cryptoDetails?.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.accordionLink}
                >
                  <LinkOutlined /> Visitar site oficial
                </a> 
            </AccordionDetails>
          </Accordion>

          <Accordion TransitionProps={{ unmountOnExit: true }} style={{ border: 'none'}}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <AccordionTitle>Links úteis</AccordionTitle>
            </AccordionSummary>

            <AccordionDetails> 
              {cryptoDetails?.links.map((link, index) => (
                <AccordionLinks
                  key={index} 
                >
                  <h4>
                    <GlobalOutlined /> {link.type}
                  </h4>{" "}
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer" 
                    title="Visitar site"
                  >
                    <LinkOutlined /> {link.name}
                  </a>
                </AccordionLinks>
              ))} 
            </AccordionDetails>
         </Accordion>  
           <br /> 
           <br /> 

           <AccordionDataTitle>Dados sobre {cryptoDetails?.name}</AccordionDataTitle>
          <Col className="stats-container"> 
            <Table dataSource={dataSource} columns={columns} />
          </Col>
        </Col>
      )}
      <CryptoGoBackTop/>
    </>
  );
};

export default CryptoDetails;
