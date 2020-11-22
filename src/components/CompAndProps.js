import React, { Component } from "react";
import "../App.css";
import { notification } from "antd";
import "antd/dist/antd.css";
import Select from "../elements/Select";
import narto from "../assets/narto.png"

//function components
function Square(props) {
  const onClick = (type) => {
    notification[type]({
      message: "Hello There",
    });
  };
  return (
    <div>
      <div className="img-wrap">
        <img src={props.img} className="narto"/>
      </div>
      <div style={{marginTop:"10px"}}>
      <h2 style={{textAlign:"center" }}>{props.nama}</h2>
      <p style={{textAlign:"center"}}>{props.nim}</p>
      </div>
      <Select background="#581845">
        <option>Kelas A</option>
        <option>Kelas B</option>
      </Select>
    </div>
  );
}

//class components
export default class CompAndProps extends Component {
  render() {
    const background = {
      backgroundColor: this.props.bgcolor,
    };
    return (
      <div className="wrapper">
        <div className="User-info" style={background}>
          <Square nama="Obed Jeck Gredo T" nim="21120117120026" img={narto} />
        </div>
        <div className="User-info" style={background}>
          <Square nama="Kurniasari" nim="211201130072" img="https://cdn.idntimes.com/content-images/post/20200914/tsunade-850a5da496bee010d70b38812ae75f2a_600x400.jpg" />
        </div>
      </div>
    );
  }
}
