//import React, { useState } from "react";
import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import logo from "../images/claps.png";

const { Sider } = Layout;
const { SubMenu } = Menu;

class LeftMenu extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="Logo" height="20" /> CLAPS{" "}
          </div>
        </Link>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="desktop" />
                <span>Computers</span>
              </span>
            }
          >
            <Menu.Item key="3">
              <Link to="/computers">All</Link>
            </Menu.Item>
            <Menu.Item key="4">Favourites</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="team" />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub1_1"
            title={
              <span>
                <Icon type="pie-chart" />
                <span>Reports</span>
              </span>
            }
          >
            <Menu.Item key="1_3">Password requests</Menu.Item>
            <Menu.Item key="1_4">Errors</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub1_2"
            title={
              <span>
                <Icon type="setting" />
                <span>Settings</span>
              </span>
            }
          >
            <Menu.Item key="9">
              <span>Main</span>
            </Menu.Item>
            <Menu.Item key="9">
              <Icon type="solution" />
              <span>User credentials</span>
            </Menu.Item>
          </SubMenu>

          <Menu.Item key="9">
            <Icon type="file" />
            <span>About</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export { LeftMenu };
