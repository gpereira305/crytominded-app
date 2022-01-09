import React, { useState } from "react"; 
import { Link, useLocation } from "react-router-dom"; 


import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
 
import { 
  NavInnerContainer, 
  NavBarItem, 
  NavContainer, 
  NavMenuIcon, 
  NavBarMenu, 
  NavInner
} from "./styles/NavbarStyled"; 

import { makeStyles } from '@mui/styles'; 


const Navbar = () => {
  let  [activeMenu, setActiveMenu] = useState(false);  

// STYLES
  const useStyles = makeStyles({  
    active: {
      opacity: '1!important', 
    }, 
    navLink: {
      display: 'flex',
      alignItems: 'end',
      color: 'var(--secondary)',
      paddingBottom: '2px',
      
       '&:hover': {
        color:  'var(--tertiary)'
       } 
    },
    selected: {
      color: 'var(--tertiary)!important',
      borderBottom: '2px solid var(--tertiary)',

      '@media (max-width: 801px)': {
        borderBottom: 'none'
      }
    }
  })


  const location = useLocation();

  const classes = useStyles(); 

  return (
    <NavContainer>  
      <NavInnerContainer> 
        <NavInner>
          <Link to="/" title="Logo | Home page" className={classes.navLink}> 
            Cryptominded
          </Link>
        </NavInner>   

        <NavMenuIcon  onClick={() => setActiveMenu(!activeMenu)}>
          <MenuIcon style={{ color: 'var(--secondary)'}}/>
        </NavMenuIcon>  
      </NavInnerContainer>

        {/*******  NAVBAR SECTION *******/} 
      <NavBarMenu className={activeMenu ? classes.active : ''}> 
          <NavBarItem>  
            <Link to="/" title="Volar à home page" 
               className={`${classes.navLink} ${location.pathname === '/' ? classes.selected : ''}`} 
               onClick={() => setActiveMenu(!activeMenu)}> 
              <HomeOutlinedIcon style={{ marginRight: '5px'}}/> {" "}
                Home
            </Link>  
          </NavBarItem> 
 
          <NavBarItem>
            <Link to="/cryptocurrencies" title="Sobre criptomoedas"
               className={`${classes.navLink} ${location.pathname === '/cryptocurrencies' ? classes.selected : ''}`} 
               onClick={() => setActiveMenu(!activeMenu)}>  
               <MonetizationOnOutlinedIcon style={{ marginRight: '5px'}}/>
                {" "}
               Criptomoedas
            </Link>
          </NavBarItem> 

          <NavBarItem>
            <Link to="/news" title="Notícias sobre criptomoedas" 
               className={`${classes.navLink} ${location.pathname === '/news' ? classes.selected : ''}`}
               onClick={() => setActiveMenu(!activeMenu)}>
               <NewspaperOutlinedIcon style={{ marginRight: '5px'}}/> {" "}
               Notícias
            </Link>
          </NavBarItem>

          <NavBarItem>
            <Link to="/about" title="Sobre o app criptominded" 
               className={`${classes.navLink} ${location.pathname === '/about' ? classes.selected : ''}`}
               onClick={() => setActiveMenu(!activeMenu)}>
               <InfoOutlinedIcon style={{ marginRight: '5px'}}/> {" "}
               Sobre o app
            </Link>
          </NavBarItem>
        </NavBarMenu> 
    </NavContainer>
  );
};

export default Navbar;
