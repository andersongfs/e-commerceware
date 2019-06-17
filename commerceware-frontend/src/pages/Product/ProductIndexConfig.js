import React from "react";
import { Divider, Button } from "antd";

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
        return <p>$ {el}</p>;
      }
    },
    {
      title: "Promotion",
      dataIndex: "promotion.name",
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
          <Button type="link" onClick={context.editItem(row)}>
            Edit
          </Button>
          <Divider type="vertical" />
          <Button type="link" onClick={context.removeItem(row)}>
            Delete
          </Button>
        </span>
      )
    }
  ];
};

export const columns = renderFunction;
