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
                data={{key}, {value}}
                margin={{ top: 5, right: 30, left: 5, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" fill="white" />
                <XAxis dataKey="key" />
                <YAxis dateKey="value" tick={false}/>
                <Tooltip />
                <Legend />
                <Bar dataKey={key} fill="#8884d8" />
                <ReferenceLine y={0} label={{ infront: 'true', position: 'insideBottomRight',  value: 'Normal', fill: 'black', fontSize: 18}} stroke="green"/>
                <ReferenceLine y={7} label={{ infront: 'true', position: 'insideBottomRight',  value: 'Mild', fill: 'black', fontSize: 18}} stroke="blue"/>
                <ReferenceLine y={9} label={{ infront: 'true', position: 'insideBottomRight',  value: 'Moderate', fill: 'black', fontSize: 18}} stroke="black"/>
                <ReferenceLine y={14} label={{ infront: 'true', position: 'insideBottomRight',  value: 'Severe', fill: 'black', fontSize: 18}} stroke="purple"/>
                <ReferenceLine y={19} label={{ infront: 'true', position: 'insideBottomRight', value: 'Extremely Severe', fill: 'black', fontSize: 18}} stroke="red"/>
             </BarChart>

            </li>


          )}
        </ul>
      )
  } else { return null;}
  };
export default LanguageList;
