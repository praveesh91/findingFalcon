import React from "react";
import { Card, Steps } from "antd";
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const { Step } = Steps;

const Home = () => {
  return (
    <div style={{ paddingTop: "4rem" }}>
      <Card title={"Follow the instructions to find your Falcon"}>
        <Steps responsive>
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
          <Step
            status="process"
            title="Click find falcon"
            icon={<LoadingOutlined />}
          />
          <Step status="finish" title="Done" icon={<SmileOutlined />} />
        </Steps>
      </Card>
    </div>
  );
};

export default Home;
