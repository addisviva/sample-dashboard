import React from 'react'
import {  BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Chart.css'


function Chart() {
  
   const data = [
    {
      name: "Page A",
      seconds: 4000,
      minutes: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      seconds: 3000,
      minutes: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      seconds: 2000,
      minutes: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      seconds: 2780,
      minutes: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      seconds: 1890,
      minutes: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      seconds: 2390,
      minutes: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      seconds: 3490,
      minutes: 4300,
      amt: 2100
    }
  ];
    
  
  return (
    <div className='body'>
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
          dataKey="date"
          datakey='value'
          axisLine={false}
          tickLine={false}
          tickCount={8} />
          <YAxis 
          datakey='amount'
          tickLine={false}
          tickCount={8}
          tickFormatter={number => `${number.toFixed(2)}`} />
          <Tooltip />
          <Legend />
          <Bar dataKey="minutes" fill="#8884d8" />
          <Bar dataKey="seconds" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

  
export default Chart 
