import React, { useState } from "react";
import "./App.css";
import ReactSS, { ReactNoJSX } from "./components/ReactJSX";
import CompAndProps from "./components/CompAndProps";
import Select from "./elements/Select";
import Link from "./elements/Link";
import 'antd/dist/antd.css';

import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

function App() {
  const onClickButton = (e) => {
    alert("Haii");
  };

  const [data, setData] = useState();
  const onChange = (e) => {
    setData(e.target.value);
  };
  return (
    <Layout className="layout">
    <Header style={{backgroundColor:"#C70039 "}}>
        <div style={{display:"inline-block"}}>
          <h1 style={{ color: "white" }}>KELOMPOK 15</h1>
        </div>
        <div style={{display: "inline-block", float:"right"}}><Link>Gredow</Link><Link>Kurniasari</Link></div>
        </Header>
      <Content style={{padding: "0 50px"}}>
        <div className="site-layout-content">
          <CompAndProps bgcolor="#FFC300" />
          </div>
      </Content>
      <Footer style={{textAlign:"center"}}>

      </Footer>
    </Layout>
  );
}

export default App;
