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



const LanguageList = (props) => {
  if (props.langslist) {

    {

      var totalcount =  Object.entries(props.langslist).map(([key,value]) =>
      (value.count)).reduce((pv, cv) => pv+cv, 0 ) }
        return(

          <ul>
            {Object.entries(props.langslist).map(([key,value]) =>
              <li key={key}>
                {key} -> {value}
                </li>
              )}


            </ul>
        )
}


  };
export default LanguageList;
