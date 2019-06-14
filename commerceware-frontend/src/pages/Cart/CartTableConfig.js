import React from "react";
import { Divider, Icon, Button } from "antd";
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
      title: "Quantity",
      dataIndex: "quantity",
      align: "center",
      sorter: true,
      sortDirections: ["descend", "ascend"],
      defaultSortOrder: "descend",
      render: (el, row, index) => {
        return (
          <>
            <Button
              style={{ marginRight: 10 }}
              shape="circle"
              onClick={context.decreaseQuantity(row)}
              icon="minus"
            />
            {el}
            <Button
              style={{ marginLeft: 10 }}
              shape="circle"
              onClick={context.increaseQuantity(row)}
              icon="plus"
            />
          </>
        );
      }
    },
    {
      title: "Value per Item",
      dataIndex: "price",
      align: "center",
      sorter: true,
      sortDirections: ["descend", "ascend"],
      defaultSortOrder: "descend",
      render: el => {
        return <>$ {el}</>;
      }
    },
    {
      title: "Action",
      key: "action",
      render: (text, row, record) => (
        <span>
          <a onClick={context.removeItem(row)}>Delete</a>
        </span>
      )
    }
  ];
};

export const columns = renderFunction;
