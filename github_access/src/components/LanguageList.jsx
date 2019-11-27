import React from 'react';
import BarChart from './BarChart.js';
import PieChart from './PieChart.js';


let langs = ''
let i = ''

let langs1 = ''
let i1 = ''


const LanguageList = (props) => {
    if (props.langslist) {
        return (
            <ul>
                {Object.entries(props.langslist).map(([key, value]) =>
                    <li key={key}>
                        {key} - {value}
                        {console.log(i=i+value)}
                        {console.log(langs=langs+key+'.')}

                        {console.log(i1=i1+value)}
                        {console.log(langs1=langs1+key+'.')}

                    </li>

                )}
                <div>
                    <PieChart repoSize={i1.split('')} repoNames={langs1.split('.')}/>
                   { i1= ''}
                   {langs1 = ''}
                </div>
                <div>
                    <BarChart repoSize={i.split('')} repoNames={langs.split('.')}/>
                   { i= ''}
                   {langs = ''}
                </div>
            </ul>

        )
    } else { return null; }
};
export default LanguageList;
