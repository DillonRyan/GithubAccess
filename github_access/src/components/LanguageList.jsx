import React from 'react';
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
            </li>
          )}
        </ul>
      )
  } else { return null;}
  };
export default LanguageList;
