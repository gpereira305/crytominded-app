import React, { useState } from "react"; 
import { Link, useLocation } from "react-router-dom"; 


import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { makeStyles } from '@mui/styles'; 
 
import { 
  NavInnerContainer, 
  NavBarItem, 
  NavContainer, 
  NavMenuIcon, 
  NavBarMenu, 
  NavInner,
  NavbarWrapper, 
} from "../styles/CryptoNavbarStyled"; 




const CryptoNavbar = () => {
  let  [activeMenu, setActiveMenu] = useState(false);  

  // eleva ao top ao transitar páginas
  const goToTopImg = () =>{
    window.scrollTo({
      top: 0,   
    });
  };

 const handleActiveMenus = () => {
    setActiveMenu(!activeMenu)
    goToTopImg()
 }

  // STYLES SECTION
  const useStyles = makeStyles({  

    '@media (max-width: 801px)': {
      active: {   
        right: '-50%!important'
      },  
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
      color: 'var(--dark-pink)!important',
      borderBottom: '2px solid var(--dark-pink)',

      '@media (max-width: 801px)': {
        borderBottom: 'none'
      } 
    },
    iconMenu:{
      marginRight: '3px'
    },
    
    menuOverlay: { 
      '@media (max-width: 801px)':{
        transition:  'all ease-in .3s',
        position: 'absolute',
        background: 'rgb(0 0 0 / 55%)',
        height: '100%',
        width: '100%',
        left: '-100%'

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

        <NavMenuIcon  onClick={handleActiveMenus}>
          <MenuIcon style={{ color: 'var(--secondary)'}}/>
        </NavMenuIcon>  
      </NavInnerContainer>

        {/*******  NAVBAR SECTION *******/} 
      <NavBarMenu className={activeMenu ? classes.active : ''}>  
        {/*mobile menu overlay */}
         <div className={activeMenu ? classes.menuOverlay : ''} 
           onClick={() => setActiveMenu(!activeMenu)}
         ></div>

        <NavbarWrapper> 
              <NavBarItem>  
                <Link to="/" title="Volar à home page" 
                  className={`${classes.navLink} ${location.pathname === '/' ? classes.selected : ''}`} 
                  onClick={handleActiveMenus}> 
                  <HomeOutlinedIcon className={classes.iconMenu}/> {" "}
                    Home
                </Link>  
              </NavBarItem> 
    
              <NavBarItem>
                <Link to="/cryptocurrencies" title="Sobre criptomoedas"
                  className={`${classes.navLink} ${location.pathname === '/cryptocurrencies' ? classes.selected : ''}`} 
                  onClick={handleActiveMenus}>  
                  <MonetizationOnOutlinedIcon className={classes.iconMenu}/>
                    {" "}
                  Criptomoedas
                </Link>
              </NavBarItem> 

              <NavBarItem>
                <Link to="/news" title="Notícias sobre criptomoedas" 
                  className={`${classes.navLink} ${location.pathname === '/news' ? classes.selected : ''}`}
                  onClick={handleActiveMenus}>
                  <NewspaperOutlinedIcon className={classes.iconMenu}/> {" "}
                  Notícias
                </Link>
              </NavBarItem>

              <NavBarItem>
                <Link to="/about" title="Sobre o app criptominded" 
                  className={`${classes.navLink} ${location.pathname === '/about' ? classes.selected : ''}`}
                  onClick={handleActiveMenus}>
                  <InfoOutlinedIcon className={classes.iconMenu}/> {" "}
                  Sobre o app
                </Link>
              </NavBarItem> 
          </NavbarWrapper>
        </NavBarMenu> 
    </NavContainer>
  );
};

export default CryptoNavbar;
