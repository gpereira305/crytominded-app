import React from "react";
import { Layout, Typography, Space } from "antd";
import "./app.css";
import { Switch, Route, Link } from "react-router-dom";
import {
  Navbar,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
  HomePage,
} from "./components";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/exchanges" component={Exchanges} />
              <Route
                exact
                path="/cryptocurrencies"
                component={Cryptocurrencies}
              />
              <Route exact path="/crypto/:coinId" component={CryptoDetails} />
              <Route exact path="/news" component={News} />
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{
              color: "#fff",
              textAlign: "center",
            }}
          >
            CryptoMinded <br />
            &copy; All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Câmbios</Link>
            <Link to="/news">Notícias</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
