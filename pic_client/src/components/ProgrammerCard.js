import React from 'react';
import '../containers/Programmers.css';
import LikeButton from './LikeButton.js';



const ProgrammerCard = ({ programmer }) => (
  <div class="column">
  <div key={programmer.id} className="ProgrammerCard">
  <img className="ProgrammerImage" src={programmer.img_url} alt={programmer.name} />
  <h3>{programmer.name}</h3>
    <p>Programming Languages: {programmer.languages}</p>
    <p>Time Zone: {programmer.time_zone}</p>
    <p>Email: {programmer.email}</p>
    <LikeButton />
  </div>
  </div>
)

export default ProgrammerCard;
