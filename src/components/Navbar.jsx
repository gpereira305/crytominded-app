import React, { useEffect, useState } from "react";
import { Button, Typography, Menu, Avatar, Tree } from "antd";
import { Link } from "react-router-dom";
import icon from "../assets/crypto-logo.png";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
  InfoCircleOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener(" resize", handleResize);
  }, []);

  useEffect(() => {
    screenSize < 801 ? setActiveMenu(false) : setActiveMenu(true);
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title className="logo" level={2}>
          <Link to="/">CryptoMinded</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link
              to="/"
              onClick={() =>
                screenSize < 801 ? setActiveMenu(false) : setActiveMenu(true)
              }
            >
              Home
            </Link>
          </Menu.Item>
          <Menu.Item icon={<DollarCircleOutlined />}>
            <Link
              to="/cryptocurrencies"
              onClick={() =>
                screenSize < 801 ? setActiveMenu(false) : setActiveMenu(true)
              }
            >
              CriptoMoedas
            </Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link
              to="/news"
              onClick={() =>
                screenSize < 801 ? setActiveMenu(false) : setActiveMenu(true)
              }
            >
              Notícias
            </Link>
          </Menu.Item>
          <Menu.Item icon={<InfoCircleOutlined />}>
            <Link
              to="/about"
              onClick={() =>
                screenSize < 801 ? setActiveMenu(false) : setActiveMenu(true)
              }
            >
              Sobre o app
            </Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
