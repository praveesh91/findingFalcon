import React from "react";
import "./App.css";
import { Layout } from "antd";
import RouterOutlet from "./routes.js";

import { BrowserRouter as Router } from "react-router-dom";
import HeaderSection from "./components/HeaderSection";

const { Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
        <Layout className="layout">
          <HeaderSection />
          <Content style={{ padding: "0 50px" }}>
            <div className="site-layout-content">
              <RouterOutlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Coding problem - www.geektrust.in/finding-falcone
          </Footer>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
