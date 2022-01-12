  
import React from "react";  
import FadeLoader from "react-spinners/FadeLoader";
import { makeStyles } from '@mui/styles'; 
 

const CryptoLoader = () => { 

// STYLES SECTION
const useStyles = makeStyles({
  loaderIcon: {
  minHeight: '85vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative'
 }, 

 loader:{
   position: 'absolute',
   top: '23%',
   left: '44.5%', 

   '@media (max-width: 1077px)' : {
    left: '42%'
   },

   '@media (max-width: 890px)' : {
    left: '40%'
   }, 

   '@media (max-width: 640px)' : {
    left: '36%'
   },

   '@media (max-width: 470px)' : {
    left: '32%'
   }
 },
 loadingMsg: {
   color: 'rgb(113, 11, 194)'
 }
})


  const classes = useStyles(); 
  return ( 

    <div className={classes.loaderIcon}>  
      <div className={classes.loader}>
      <FadeLoader
       height={8}
       width={8}
       radius={10}
       margin={25} 
       color={'#710bc2'}
      />  
      </div>
      <div>
          <h1 className={classes.loadingMsg}>Carregando, aguarde...</h1>
      </div>
    </div>
  );
};

export default CryptoLoader;
