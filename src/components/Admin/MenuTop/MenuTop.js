import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import {
  MenuUnfoldOutlined,
  PoweroffOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import Logo from "../../../assets/logoSinaptic.webp";
import "./MenuTop.scss";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;
  // const logoutUser = () => {
  //   logout();
  //   window.location.reload();
  // };
  return (
    <div className="menu-top">
      <div className="menu.top__left">
        <Link to={"/admin"}>
          <img
            className="menu-top__left-logo"
            src={Logo}
            alt="Jorge Emanuel Dominguez"
          ></img>
          <span className="spanTop">|| Stay Connected </span>
        </Link>
        <Button type="Link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <MenuOutlined /> : <MenuUnfoldOutlined />}
        </Button>
      </div>
      <div className="menu-top__rigth">
        <button type="Link">
          <PoweroffOutlined />
        </button>
      </div>
    </div>
  );
}
