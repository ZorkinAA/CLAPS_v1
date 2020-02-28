import React from "react";
import "antd/dist/antd.css";
import "../index.css";
import { Modal, Button } from "antd";

class TakeComputerInfo extends React.Component {
  constructor(props) {
    super(props);
    // Устанавливаем состояние
    this.state = {
      data: null,
      active: 0,
      term: "",
      computername: "test",
      visible: false
    };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Action
        </Button>
        <Modal
          title="Computer information"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          Computer name:
          <p>{this.props.computername}</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

export { TakeComputerInfo };
