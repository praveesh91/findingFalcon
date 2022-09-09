import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Col,
  Row,
  Select,
  Typography,
  Radio,
  Space,
  Button,
  message,
  Form,
  Card,
} from "antd";
import styles from "./FindFalcon.module.scss";
import axios from "axios";

const { Option } = Select;
const { Title } = Typography;

const initialState = [
  {
    planet: "",
    vehicle: "",
    distance: 0,
    speed: 0,
  },
  {
    planet: "",
    vehicle: "",
    distance: 0,
    speed: 0,
  },
  {
    planet: "",
    vehicle: "",
    distance: 0,
    speed: 0,
  },
  {
    planet: "",
    vehicle: "",
    distance: 0,
    speed: 0,
  },
];

export const FindFalcon = () => {
  let history = useHistory();
  const [form] = Form.useForm();
  const [totalTime, setTotalTime] = useState(0);
  const [data, setData] = useState(initialState);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    getPlanets();
    getVehicles();
    return () => {};
  }, []);

  useEffect(() => {
    setTotalTime(data.reduce((init, el) => el.speed + init, 0));
    return () => {};
  }, [data]);

  const getPlanets = async () => {
    try {
      const { data } = await axios.get(
        "https://findfalcone.herokuapp.com/planets"
      );
      setPlanets(data);
    } catch (error) {
      message.error("Failed to fetch planets !!!");
    }
  };

  const getVehicles = async () => {
    try {
      const { data } = await axios.get(
        "https://findfalcone.herokuapp.com/vehicles"
      );
      setVehicles(data);
    } catch (error) {
      message.error("Failed to fetch vehicles !!!");
    }
  };
  const onChangePlanet = (e) => {
    const newArr = [...data];
    newArr[e[2]]["planet"] = e[0];
    newArr[e[2]]["distance"] = e[1];
    setData(newArr);
  };
  const onChangeVehicle = (index, e) => {
    const newArr = [...data];
    newArr[index]["vehicle"] = vehicles[e.target.value]["name"];
    newArr[index]["speed"] = vehicles[e.target.value]["speed"];
    newArr[index]["time"] =
      vehicles[e.target.value]["distance"] / vehicles[e.target.value]["speed"];
    setData(newArr);
  };

  const handleReset = () => form.resetFields();

  const handlesubmit = async () => {
    const tokenResponse = await axios.post(
      `https://findfalcone.herokuapp.com/token`,
      {},
      {
        headers: { Accept: "application/json" },
      }
    );
    const planetList = data.map((item) => item.planet);
    const vehicleList = data.map((item) => item.vehicle);
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    const postData = {
      planet_names: planetList,
      vehicle_names: vehicleList,
      token: tokenResponse.data.token,
    };
    try {
      const response = await axios.post(
        `https://findfalcone.herokuapp.com/find`,
        postData,
        {
          headers: headers,
        }
      );
      if (response.data.status === "success") {
        history.push({
          pathname: "/success",
          state: {
            planetName: response.data.planet_name,
            totalTime,
          },
        });
      } else {
        message.error("Cannot find the Falcon, Try again!!!");
        form.resetFields();
      }
    } catch (err) {
      if (err.response) {
        message.error("404 error !!!");
      } else {
        message.error("Failed to fetch !!!");
      }
    }
  };
  return (
    <div className={styles["container"]}>
      <Form name="basic" form={form} onFinish={handlesubmit}>
        <Title level={3} style={{ textAlign: "center" }}>
          Finding Falcone !!
        </Title>
        <Card
          title="Select planets you want to search in"
          extra={`Time taken : ${totalTime}`}>
          <Row gutter={[16, 16]} className={styles["container__content"]}>
            {data.map((element, index) => (
              <Col md={6} sm={9} key={index}>
                <div className={styles["container__content__select"]}>
                  <Form.Item
                    label="Select Planet name"
                    name={`select${index}`}
                    rules={[
                      { required: true, message: "Please select a planet!" },
                    ]}>
                    <Select
                      showSearch
                      onChange={onChangePlanet}
                      style={{ width: 200 }}
                      placeholder="Destination 1"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }>
                      {planets.map((el) => (
                        <Option
                          key={el.name}
                          disabled={data
                            .map((item) => item.planet)
                            .includes(el.name)}
                          value={[el.name, el.distance, index]}>
                          {el.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </div>
                <Form.Item
                  name={`radio${index}`}
                  rules={[
                    { required: true, message: "Please select a vehicle!" },
                  ]}>
                  <Radio.Group
                    onChange={(e) => onChangeVehicle(index, e)}
                    value={index}>
                    <Space direction="vertical" align="start" size="middle">
                      {vehicles.map((el, indx) => (
                        <Radio
                          key={el.max_distance}
                          value={indx}
                          disabled={
                            data.filter((item) => item.vehicle === el.name)
                              .length >= el.total_no ||
                            el.max_distance < element.distance
                              ? true
                              : false
                          }>
                          {el.name}
                        </Radio>
                      ))}
                    </Space>
                  </Radio.Group>
                </Form.Item>
              </Col>
            ))}

            <Space className={styles["container__content__button"]}>
              <Button type="primary" htmlType="submit">
                Find falcone
              </Button>
              <Button onClick={handleReset} danger>
                Reset
              </Button>
            </Space>
          </Row>
        </Card>
      </Form>
    </div>
  );
};
