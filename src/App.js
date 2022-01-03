import React from "react";
import { Layout, Typography, Space } from "antd";
import "./app.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
      <Router>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                />
                <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                <Route path="/news" element={<News />} />
              </Routes>
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
      </Router>
    </div>
  );
};

export default App;
