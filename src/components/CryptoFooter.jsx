import React from 'react'
import { Layout, Typography, Space } from "antd";
import { Switch, Route, Link } from "react-router-dom";
import { IoMdHeart } from "react-icons/io";
import { FooterCrypto } from './styles/CryptoFooterStyled.js'

const CryptoFooter = () => {
   // busca pela data atual automaticamente
 const todayDate = new Date().getFullYear();


  return (
    <>
     <FooterCrypto>
          <div 
            style={{
              color: "#fff",
              textAlign: "center",
            }}
          >
           <div style={{ display: 'flex', justifyContent: 'center'}}>
              Made with <IoMdHeart size={24} color='red' style={{ padding: '3px'}}/> by G. S. Pereira    
           </div> 
            &copy; {todayDate} Cryptominded | All rights reserved
          </div>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/news">Notícias</Link>
          </Space>
        </FooterCrypto> 
    </>
  )
}

export default CryptoFooter
