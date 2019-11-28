import React from 'react';
import Moment from 'react-moment';
const imgStye = {
  borderRadius: "50%",
  width: "250px",
  height: "250px"
};
const ProfileDetails = (props) => {
    return (
      <div>
          {props.infoclean.avatar_url ? <img src={props.infoclean.avatar_url} alt="Profile" style={imgStye}/> : null }
          {props.infoclean.name ? <div><p> Displaying all public information about : </p><p><a href={props.infoclean.html_url}>{props.infoclean.name}</a></p></div> : null }
          {props.infoclean.login ? <div><p>Here is a chart containing all your commits over the past 12 months</p>{ <img src={"http://ghchart.rshah.org/fc03ba/"+props.infoclean.login} alt="Github chart" />
          }<br/></div> : null }
          {props.infoclean.name && props.infoclean.bio ? <div><p>Name + Bio :</p><p>{props.infoclean.name} {props.infoclean.bio}</p></div> : null }
          {props.infoclean.created_at ? <div><p>Joined:</p><p>{<Moment from={new Date()}>{props.infoclean.created_at}</Moment>}</p></div> : null }
          {props.infoclean.public_repos ? <div><p>Public Repos:</p><p>{props.infoclean.public_repos}</p></div> : null }
          {props.infoclean.followers && props.infoclean.following  ? <div>Followers: {props.infoclean.followers} Following: {props.infoclean.following}</div> : null }
          <br></br>
      </div>
    )
};
export default ProfileDetails;
