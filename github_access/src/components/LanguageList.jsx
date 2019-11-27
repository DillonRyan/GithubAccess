import React from 'react';
import BarChart from './BarChart.js';


let langs = '';
let i = '';


const LanguageList = (props) => {
    if (props.langslist) {
        return (
            <ul>
                {Object.entries(props.langslist).map(([key, value]) =>
                    <li key={key}>
                        {key} - {value}
                        {console.log(i=i+value)}
                        {console.log(langs=langs+key+'.')}

                    </li>

                )}
                <div>
                    <BarChart repoSize={i.split('')} repoNames={langs.split('.')}/>
                   { i= ''};
                   {langs = ''};
                </div>

            </ul>

        )
    } else { return null; }
};
export default LanguageList;
