import React from "react";
import { Card, Table } from "antd";


const dataSource = [
  {
    key: "1",
    subject: "Mike",
    type: "Send",
    address: "0x12...2345",
    message: "Cookies 🍪",
    amount: "$3.50",
  },
  {
    key: "2",
    subject: "Amanda",
    type: "Receive",
    address: "0x12...2345",
    message: "Dinner 🍔",
    amount: "$22.30",
  },
  {
    key: "3",
    subject: "Roy",
    type: "Send",
    address: "0x12...2345",
    message: "Movie Tickets",
    amount: "$17.31",
  },
  {
    key: "4",
    subject: "Amanda",
    type: "Send",
    address: "0x12...2345",
    message: "Lunch",
    amount: "$9.20",
  },
  {
    key: "5",
    subject: "Charlie",
    type: "Send",
    address: "0x12...2345",
    message: "Golf ⛳️",
    amount: "$49.99",
  },
  {
    key: "6",
    subject: "Charlie",
    type: "Receive",
    address: "0x12...2345",
    message: "Gatorade",
    amount: "$2.30",
  },
  {
    key: "7",
    subject: "Mike",
    type: "Send",
    address: "0x12...2345",
    message: "Poker ♠️",
    amount: "$3.50",
  },
  {
    key: "8",
    subject: "Jimmy",
    type: "Send",
    address: "0x12...2345",
    message: "Car Fix",
    amount: "$30.00",
  },
];

const columns = [
  {
    title: "Payment Subjet",
    dataIndex: "subject",
    key: "subject",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },

  {
    title: "Message",
    dataIndex: "message",
    key: "message",
  },
  {
    title: "Amount",
    key: "amount",
    render: (_, record) => (
      <div
        style={record.type === "Send" ? { color: "red" } : { color: "green" }}
      >
        {record.type === "Send" ? "-" : "+"}
        {record.amount} Matic
      </div>
    ),
  },
];

function RecentActivity({ history }) {

  return (
    <Card title="Recent Activity" style={{ width: "100%", minHeight: "663px" }}>
      {history && 
      <Table
        dataSource={history}
        columns={columns}
        pagination={{ position: ["bottomCenter"], pageSize: 8 }}
      />
    }
    </Card>
  );
}

export default RecentActivity;
