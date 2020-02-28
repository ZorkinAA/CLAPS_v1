import React, { Component } from "react";

import { Layout } from "antd";

import { LeftMenu } from "../Scripts/menu";

const { Content } = Layout;

class DefaultSite extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <LeftMenu />
        <Content style={{ margin: "16px" }}>
          <h1>Welcome to LAPS portal</h1>
          Please choose your action
        </Content>
      </Layout>
    );
  }
}

export { DefaultSite };
