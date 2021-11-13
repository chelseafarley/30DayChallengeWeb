import React, { Component } from 'react';
import '../css/recharts.css';
import {
  RadialBarChart, RadialBar, Tooltip, ResponsiveContainer,
  CartesianGrid, Line, LineChart, XAxis, YAxis, Legend
} from 'recharts';

const data = [
  { name: '18-24', uv: 60, amt: 31.47, pv: 2400, fill: '#8884d8' },
  { name: '25-29', uv: 50, amt: 26.69, pv: 4500, fill: '#83a6ed' },
  { name: '30-34', uv: 30, amt: 15.69, pv: -1398, fill: '#8dd1e1' },
  { name: '35-39', uv: 59, amt: 8.22, pv: 2800, fill: '#82ca9d' },
  { name: '40-49', uv: 48, amt: 8.63, pv: 1908, fill: '#a4de6c' },
  { name: '50+', uv: 62, amt: 2.63, pv: -2800, fill: '#d0ed57' },
  { name: 'unknown', uv: 38, amt: 6.67, pv: 4800, fill: '#ffc658' },
];

const lineDataLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

export class Recharts extends Component {
  static displayName = Recharts.name;

  constructor(props) {
    super(props);
    this.state = {
      lineData: this.generateLineData()
    };
  }

  // Need a width and height for the containter or else the data won't render
  getRadialBarChart() {
    return (
      <div className="chart-wrapper">
        <ResponsiveContainer>
          <RadialBarChart
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="20%"
            outerRadius="90%"
            startAngle={180}
            endAngle={0}>
            <RadialBar minPointSize={15} background dataKey="uv" />
            <RadialBar minPointSize={15} background dataKey="amt" />
            <RadialBar minPointSize={15} background dataKey="pv" />
            <Tooltip shared={true} labelFormatter={(index) => 'Age: ' + data[index].name} />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateLineData() {
    let generatedData = [];
    lineDataLabels.forEach((label, index) => {
      let uvValue = this.getRandomNumber(0, 800);
      let amtValue = this.getRandomNumber(0, 800);
      generatedData.push({
        name: label,
        uv: uvValue,
        amt: amtValue
      });
    });

    return generatedData;
  }

  changeData() {
    this.setState({
      lineData: this.generateLineData()
    });
  }

  getLineChart() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.changeData.bind(this)}>Change Data</button>
        <div className="chart-wrapper">
          <ResponsiveContainer>
            <LineChart
              data={this.state.lineData}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid stroke="#f5f5f5" />
              <Legend />
              <Tooltip />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 800]} allowDataOverflow />
              <Line type="monotone" dataKey="uv" stroke="#ff7300" />
              <Line type="monotone" dataKey="amt" stroke="#22ff16" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.getRadialBarChart()}
        {this.getLineChart()}
      </div>
    );
  }
}
