//import React, { useState } from "react";
import React, { Component } from "react";
import { Input } from "antd";
import { Layout, Table, PageHeader } from "antd";
import { TakeComputerInfo } from "../Scripts/TakeComputerInfo";
import { LeftMenu } from "../Scripts/menu";
import { Modal, Button } from "antd";

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
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => <TakeComputerInfo computername={record.name} />
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

const { Header, Content, Footer } = Layout;

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}

class ComputerSite extends Component {
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
        <LeftMenu />

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
            <div style={{ padding: 24, background: "#fff", minHeight: 36 }}>
              Warning: <strong> Site in maintenance! </strong>
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

export { ComputerSite };
