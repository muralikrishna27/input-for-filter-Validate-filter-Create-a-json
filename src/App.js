import React, { Component } from 'react';
import './App.css';
import data from "./data.json";
import { Input, Button, Select } from 'antd';
import 'antd/dist/antd.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      model: 'Ertiga',
      year: '2015',
      sparePart: '',
      data: data,
      showNext: false
    }
  }

  onChangeHandler = (event) => {
    let value = event.target.value;
    this.setState({
      location: value
    })
  }

  onclick = (event) => {
    if (this.state.location.toLowerCase() !== "mumbai") {
      window.alert("please add appropriate location");
      this.setState({
        showNext: false
      })
    } else {
      this.setState({
        showNext: true
      })
    }
  }
  onModelChange = (value) => {
    this.setState({
      model: value,
      sparePart: this.state.data[this.state.year][value]
    })
  }
  onYearChange = (value) => {
    this.setState({
      year: value,
      sparePart: this.state.data[value][this.state.model]
    })
  }

  render() {
    const { Option } = Select;

    return (
      <div className="App">
        <div>
          <Input style={{ width: 300 }} type="text" placeholder="Enter Location"  onChange={this.onChangeHandler} />
          <Button style={{ margin: 5 }} type="primary" onClick={this.onclick}>Next</Button>
        </div>
        {this.state.showNext && <>
          <label>Model: </label>
          <Select defaultValue="Alto800" style={{ width: 120 }} onChange={this.onModelChange}>
            <Option value="Alto800">Alto800</Option>
            <Option value="Ertiga">Ertiga</Option>
            <Option value="K10">K10</Option>
            <Option value="Omni">Omni</Option>
            <Option value="Dezire">Dezire</Option>
          </Select>
          <label style={{margin: 5}}>Year: </label>
          <Select defaultValue="2015" style={{ width: 120 }} onChange={this.onYearChange}>
            <Option value="2015">2015</Option>
            <Option value="2016">2016</Option>
            <Option value="2017">2017</Option>
            <Option value="2018">2018</Option>
            <Option value="2019">2019</Option>
          </Select>
          {this.state.sparePart && <div><span>{this.state.sparePart}</span></div>}</>}
      </div>
    );
  }
}

export default App;

