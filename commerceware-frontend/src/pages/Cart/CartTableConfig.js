import React from "react";
import { Button } from "antd";
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
      title: "Price",
      dataIndex: "priceWithDiscount",
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
          <Button type="link" onClick={context.removeItem(row)}>
            Delete
          </Button>
        </span>
      )
    }
  ];
};

export const columns = renderFunction;
