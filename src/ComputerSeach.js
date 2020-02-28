import React from "react";
import { Input } from "antd";

const Search = Input.Search;

export const ComputerSearch = ({ onSearch, ...props }) => (
  <div {...props}>
    <Search
      placeholder="Enter computer name"
      onSearch={onSearch}
      style={{ width: 200 }}
    />
  </div>
);
