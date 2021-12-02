import React from "react";
import { useLocation } from "react-router-dom";
import { Card, Space } from "antd";
import styles from "./FindFalcon.module.scss";

export const Success = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div className={styles["site-card-border-less-wrapper"]}>
      <Card
        title="Success! Congragulations on finding the falcon. King Shan is mightly pleased."
        bordered={false}
        style={{ textAlign: "center" }}>
        <p>
          <Space>
            <h3>Time Taken :</h3>
            <h3>{location.state.totalTime}</h3>
          </Space>
        </p>
        <p>
          <Space>
            <h3>Planet found :</h3>
            <h3>{location.state.planetName}</h3>
          </Space>
        </p>
      </Card>
    </div>
  );
};
