import React from "react";
import { Divider } from "antd";

const renderFunction = context => {
  return [
    {
      title: "Product",
      dataIndex: "title",
      align: "center",
      sorter: true,
      sortDirections: ["descend", "ascend"],
      defaultSortOrder: "descend",
      render: el => el
    },
    {
      title: "Price",
      dataIndex: "price",
      align: "center",
      sorter: true,
      sortDirections: ["descend", "ascend"],
      defaultSortOrder: "descend",
      render: el => {
        return <p>R$ {el}</p>;
      }
    },
    {
      title: "Promotion",
      dataIndex: "promotion",
      align: "center",
      sorter: true,
      sortDirections: ["descend", "ascend"],
      defaultSortOrder: "descend",
      render: el => {
        return el;
      }
    },
    {
      title: "Action",
      key: "action",
      render: (text, row, record) => (
        <span>
          <a href="javascript:;">Edit</a>
          <Divider type="vertical" />
          <a onClick={context.removeItem(row)}>Delete</a>
        </span>
      )
    }
  ];
};

export const columns = renderFunction;
