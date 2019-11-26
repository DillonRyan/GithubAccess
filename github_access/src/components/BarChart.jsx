import React, { Component } from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ComposedChart,
  Area,
  ReferenceLine,
  Bar,
  BarChart,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    date: "Java",
    score: 25
  },
  {
    date: "ARM",
    score: 5
  },
  {
    date: "C",
    score: 3
  },
  {
    date: "Haskell",
    score: 2
  },
  {
    date : "Prolog",
    score : 2
  }
];
/*
const userInfo = (props) => [
  Object.entries(props.langslist).map(([key,value]) =>
  (value.count)).reduce((pv, cv) => pv+cv, 0 )
];
*/



const BarChart1 = (props) => {
  if (props.BarCharts) {
    {
      return(
      <BarChart
         width={700}
         height={350}
         data={data}
         margin={{ top: 5, right: 30, left: 5, bottom: 5 }}
       >
         <CartesianGrid strokeDasharray="3 3" fill="white" />
         <XAxis dataKey="date" />
         <YAxis dateKey="score" tick={false}/>
         <Tooltip />
         <Legend />
         <Bar dataKey="score" fill="#8884d8" />
         <ReferenceLine y={0} label={{ infront: 'true', position: 'insideBottomRight',  value: 'Zero', fill: 'black', fontSize: 18}} stroke="green"/>
         <ReferenceLine y={5} label={{ infront: 'true', position: 'insideBottomRight',  value: 'Fiv', fill: 'black', fontSize: 18}} stroke="blue"/>
         <ReferenceLine y={10} label={{ infront: 'true', position: 'insideBottomRight',  value: 'Ten', fill: 'black', fontSize: 18}} stroke="black"/>
         <ReferenceLine y={15} label={{ infront: 'true', position: 'insideBottomRight',  value: 'Fifteen', fill: 'black', fontSize: 18}} stroke="purple"/>
         <ReferenceLine y={20} label={{ infront: 'true', position: 'insideBottomRight', value: 'Twenty', fill: 'black', fontSize: 18}} stroke="red"/>
      </BarChart>
    )}

}


  };
export default BarChart1;
