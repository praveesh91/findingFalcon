import React from "react";
import { Col, Row, Steps } from "antd";
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const { Step } = Steps;

const Home = () => {
  return (
    <div style={{ padding: "3rem 1rem 1rem 1rem" }}>
      <Row>
        <Col md={24}>
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
        </Col>
      </Row>
    </div>
  );
};

export default Home;
