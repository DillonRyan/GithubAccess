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


const LanguageList = (props) => {
  if (props.langslist) {
    return (
        <ul>
          {Object.entries(props.langslist).map(([key,value]) =>
            <li key={key}>
              {key} - {value}
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
                 <ReferenceLine y={4} label={{ infront: 'true', position: 'insideBottomRight',  value: 'Four', fill: 'black', fontSize: 18}} stroke="blue"/>
                 <ReferenceLine y={8} label={{ infront: 'true', position: 'insideBottomRight',  value: 'Eight', fill: 'black', fontSize: 18}} stroke="black"/>
                 <ReferenceLine y={12} label={{ infront: 'true', position: 'insideBottomRight',  value: 'Twelve', fill: 'black', fontSize: 18}} stroke="purple"/>
                 <ReferenceLine y={16} label={{ infront: 'true', position: 'insideBottomRight', value: 'Sixteen', fill: 'black', fontSize: 18}} stroke="red"/>
              </BarChart>

            </li>
          )}
        </ul>
      )
  } else { return null;}
  };
export default LanguageList;
