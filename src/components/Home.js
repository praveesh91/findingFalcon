import React from "react";
import { Steps } from "antd";
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const { Step } = Steps;

const Home = () => {
  return (
    <div style={{ padding: "8rem" }}>
      <Steps>
        <Step status="finish" title="Goto find " icon={<UserOutlined />} />
        <Step
          status="finish"
          title="Select planets"
          icon={<SolutionOutlined />}
        />
        <Step
          status="finish"
          title="Select Vehicles"
          icon={<SolutionOutlined />}
        />
        <Step status="process" title="Click find" icon={<LoadingOutlined />} />
        <Step status="finish" title="Done" icon={<SmileOutlined />} />
      </Steps>
    </div>
  );
};

export default Home;
