import React from 'react';
import '../containers/Programmers.css';

const ProgrammerCard = ({ programmer }) => (
  <div class="column">
  <div key={programmer.id} className="ProgrammerCard">
  <img className="ProgrammerImage" src={programmer.img_url} alt={programmer.name} />
  <h3>{programmer.name}</h3>
    <p>Programming Languages: {programmer.languages}</p>
    <p>Time Zone: {programmer.time_zone}</p>
    <p>Email: {programmer.email}</p>
  </div>
  </div>
)

export default ProgrammerCard;
