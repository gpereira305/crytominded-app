import React from 'react'
import { Space } from "antd"; 
import { IoMdHeart } from "react-icons/io";
import { FooterCrypto, FooterInfo } from '../styles/CryptoFooterStyled.js' 

import { makeStyles } from '@mui/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography' 

const CryptoFooter = () => {
   // busca pela data atual automaticamente
 const todayDate = new Date().getFullYear();

 
//  STYLES SECTION 
const useStyles = makeStyles({
  footerTitle: {
    color: 'var(--white)'
  },
  github: {
    color: 'var(--white)', 
    width: '120px',

    '&:hover': {
      color: '#AFB5BB'
    }
  },
  linkedin:{
    color: 'var(--white)', 

    '&:hover': {
      color: '#0A66C2'
    }
  },
  footerDesc: {
    display: 'flex',
    justifyContent: 'center'
  },

  heart: {
    color: 'var(--red)',
    padding: '3px'
  }
})


 const classes = useStyles(); 
  return (
    <>
     <FooterCrypto>
          <Typography gutterBottom variant="h6" className={classes.footerTitle}>
              Visite minhas redes sociais
          </Typography>
        <Space> 
            <a href="https://github.com/gpereira305" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className={classes.github} fontSize="large" titleAccess='Github'/> 
            </a>
            <a href="https://linkedin.com/in/giovane-pereira" target="_blank" rel="noopener noreferrer">
               <LinkedInIcon className={classes.linkedin} fontSize="large" titleAccess='Linkedin'/> 
            </a> 
        </Space>
        <br /> 
 
        <FooterInfo>
          <div className={classes.footerDesc}>
            Made with <IoMdHeart size={24} className={classes.heart}/> by G. S. Pereira    
          </div> 
          <small>&copy; {todayDate} Cryptominded | All rights reserved</small>
        </FooterInfo>

        </FooterCrypto> 
    </>
  )
}

export default CryptoFooter;
