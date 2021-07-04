import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  MenuOutlined,
  BookOutlined,
  MailOutlined,
  MessageOutlined,
} from "@ant-design/icons";

import "./MenuSider.scss";

export default function MenuSider(props) {
  const { Sider } = Layout;
  const { menuCollapsed } = props;

  return (
    <Sider className="admin-sider" collapsed={menuCollapsed}>
      <Menu className="menu-slider" theme="dark" mode="inline" d>
        <Menu.Item className="menu-text" key="/admin">
          <Link to={"/admin"}>
            <HomeOutlined />
            <span className="nav-text"> Home </span>
          </Link>
        </Menu.Item>
        <Menu.Item className="menu-text" key="/admin/users">
          <Link to={"/admin/users"}>
            <UserOutlined />
            <span className="nav-text"> Usuarios </span>
          </Link>
        </Menu.Item>
        <Menu.Item className="menu-text" key="/admin/menu">
          <Link to={"/admin/menu"}>
            <MenuOutlined />
            <span className="nav-text"> Menú </span>
          </Link>
        </Menu.Item>

        <Menu.Item className="menu-text" key="/admin/blog">
          <Link to={"/admin/blog"}>
            <MessageOutlined />
            <span className="nav-text"> Blog </span>
          </Link>
        </Menu.Item>
        <Menu.Item className="menu-text" key="/admin/get-newsletter">
          <Link to={"/admin/get-newsletter"}>
            <MailOutlined />
            <span className="nav-text"> Newsletter </span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
