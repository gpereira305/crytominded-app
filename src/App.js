import React from "react";
import { Layout } from "antd";
import "./app.css";
import { Switch, Route} from "react-router-dom";


import CryptoCurrencies from "./components/layout/CryptoCurrencies";
import CryptoNavbar from './components/layout/CryptoNavbar'
import CryptoDetails from './components/layout/CryptoDetails' 
import CryptoNews from './components/layout/CryptoNews'
import CryptoHomePage from './components/layout/CryptoHomePage'
import CryptoFooter from './components/layout/CryptoFooter'
 
 

import CryptoAbout from "./components/layout/CryptoAbout";
import { Container } from "@mui/material";  

const App = () => {
  return (
    <div className="app"> 
        <CryptoNavbar />  

      {/* Main section */}
      <div style={{ marginTop: '5%'}}>
          <Layout>
            <Container maxWidth="xl" > 
              <Switch>
                <Route exact path="/" component={CryptoHomePage} />
                <Route
                  exact
                  path="/cryptocurrencies"
                  component={CryptoCurrencies}
                />
                <Route exact path="/crypto/:coinId" component={CryptoDetails} />
                <Route exact path="/news" component={CryptoNews} />
                <Route exact path="/about" component={CryptoAbout} />
              </Switch> 
            </Container>
          </Layout> 
         <CryptoFooter/> 
      </div>
    </div>
  );
};

export default App;
