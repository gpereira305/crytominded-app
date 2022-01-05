import { Spin, Typography } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import React from "react";

const { Title } = Typography;

const Loader = () => {
  return (
    <div className="loader">
      <LoadingOutlined style={{ fontSize: 72, color: "#0071bd" }} spin />
      <br />
      <Title level={3} style={{ color: "#0071bd" }}>
        Carregando, aguarde...
      </Title>
    </div>
  );
};

export default Loader;
