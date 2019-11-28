import React from 'react';
import Moment from 'react-moment';



const SortedList = (props) => {
  if (props.repitems) {
    return (
        <ul>
          {props.repitems.map((repitem) =>
            <li key={repitem.id}>
              <div>
                <div>
                  <a>Repo name : {repitem.name}</a> , Created <Moment from={new Date()}>{repitem.created_at}</Moment>
                </div>
                <div>
                  <i>{repitem.description}</i>
                </div>
                <div>
                 Language: {repitem.language} 
                </div>
                <a href={repitem.html_url} target="_blank">Click here to view repo on GitHub</a>
              </div>
              <br></br>
            </li>
          )}
        </ul>
      )
  } else { return null;}
  };
export default SortedList;
