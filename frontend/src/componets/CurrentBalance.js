import React from "react";
import { Card } from "antd";

function CurrentBalance({dollars}) {
  return (
    <Card title="Current Balance" style={{ width: "100%" }}>
      <div className="currentBalance">
        <div style={{ lineHeight: "70px" }}>$ {dollars}</div>
        <div style={{ fontSize: "20px" }}>Available</div>
      </div>
      <div className="balanceOptions">
        <div className="extraOption">Swap Tokens</div>
        <div className="extraOption">Bridge Tokens</div>
      </div>
    </Card>
  );
}

export default CurrentBalance;
