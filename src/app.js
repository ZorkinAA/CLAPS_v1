//import React, { useState } from "react";
import React, { Component } from "react";
import { Input } from "antd";
import { Layout, Menu, Icon, Table, PageHeader } from "antd";
import { TakeComputerInfo } from ".";

const { Search } = Input;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"]
  },
  {
    title: "Description",
    dataIndex: "descr",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age
  },
  {
    title: "OU Address",
    dataIndex: "ouaddress",
    filters: [
      {
        text: "Sales department",
        value: "Sales department"
      },
      {
        text: "IT department",
        value: "IT department"
      }
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.ouaddress.indexOf(value) === 0,
    sorter: (a, b) => a.ouaddress.length - b.ouaddress.length,
    sortDirections: ["descend", "ascend"]
  }
];

const ComputersList = [
  {
    key: "1",
    name: "ADFS$",
    descr: "",
    ouaddress: "Sales department"
  },
  {
    key: "2",
    name: "BADABOOM$",
    descr: "Собака барабака",
    ouaddress: "Sales department"
  },
  {
    key: "3",
    name: "DCCloud$",
    descr: "",
    ouaddress: "IT department"
  },
  {
    key: "4",
    name: "MS-NS001$",
    descr: "",
    ouaddress: "Sales department"
  },
  {
    key: "5",
    name: "MS-NS002$",
    descr: "",
    ouaddress: "Sales department"
  },
  {
    key: "6",
    name: "MS-NS003$",
    descr: "Машина 3",
    ouaddress: "Sales department"
  },
  {
    key: "7",
    name: "MS-NS004$",
    descr: "Бухгалтер",
    ouaddress: "Sales department"
  }
];

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}

class AllSite extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  state = {
    sRT: "",
    dataSource: ComputersList,
    nameSearch: ""
  };

  handleSearch = searchText => {
    const filteredComputers = ComputersList.filter(({ name }) => {
      name = name.toLowerCase();
      return name.includes(searchText);
    });

    this.setState({
      dataSource: filteredComputers
    });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
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
              <Menu.Item key="3">All</Menu.Item>
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
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <PageHeader
            style={{
              border: "1px solid rgb(235, 237, 240)"
            }}
            title="Computers"
            subTitle={
              <Search
                allowClear
                placeholder="input computer name"
                //onSearch={value => console.log(value)}
                style={{ width: 200 }}
                onChange={e => {
                  const currValue = e.target.value.toLowerCase();
                  const filteredData = ComputersList.filter(({ name }) => {
                    name = name.toLowerCase();
                    return name.includes(currValue);
                  });

                  this.setState({
                    dataSource: filteredData
                  });
                }}
                onSearch={this.handleSearch}
              />
            }
          />

          <Table
            columns={columns}
            dataSource={this.state.dataSource}
            onChange={onChange}
          />
          <Content style={{ margin: "16px" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            CLAPS ©2020 Created by team
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export { AllSite };
