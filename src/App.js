import React from "react";
import { Layout, Typography, Space } from "antd";
import "./app.css";
import { Switch, Route, Link } from "react-router-dom";
import {
  Navbar,
  Cryptocurrencies,
  CryptoDetails,
  News,
  HomePage,
  CryptoFooter,
} from "./components";
import About from "./components/About";
import { Container } from "@mui/material";  

const App = () => {
  return (
    <div className="app"> 
        <Navbar />  
      {/* Main section */}
      <div style={{ marginTop: '5%'}}>
        <Layout>
          <Container maxWidth="xl" > 
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route
                exact
                path="/cryptocurrencies"
                component={Cryptocurrencies}
              />
              <Route exact path="/crypto/:coinId" component={CryptoDetails} />
              <Route exact path="/news" component={News} />
              <Route exact path="/about" component={About} />
            </Switch> 
          </Container>
        </Layout>

       <CryptoFooter/> 
      </div>
    </div>
  );
};

export default App;
