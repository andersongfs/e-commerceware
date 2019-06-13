import React from "react";
import { Divider, Icon, Button } from "antd";

export const columns = [
  {
    title: "Product",
    dataIndex: "product.title",
    align: "center",
    sorter: true,
    sortDirections: ["descend", "ascend"],
    defaultSortOrder: "descend",
    render: el => el
  },

  {
    title: "Promotion",
    dataIndex: "product.promotion",
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
    dataIndex: "qtt",
    align: "center",
    sorter: true,
    sortDirections: ["descend", "ascend"],
    defaultSortOrder: "descend",
    render: el => {
      return (
        <>
          <Button style={{ marginRight: 10 }} shape="circle" icon="minus" />
          {el}
          <Button style={{ marginLeft: 10 }} shape="circle" icon="plus" />
        </>
      );
    }
  },
  {
    title: "Value per Item",
    dataIndex: "product.price",
    align: "center",
    sorter: true,
    sortDirections: ["descend", "ascend"],
    defaultSortOrder: "descend",
    render: el => {
      return (
        <>
          R$ {el}
          <Icon type="delete" style={{ marginLeft: 10 }} />
        </>
      );
    }
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a href="javascript:;">Delete</a>
      </span>
    )
  }
];
