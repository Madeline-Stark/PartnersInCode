import React from 'react';

const ProgrammerCard = ({ programmer }) => (
  <div key={programmer.id} className="ProgrammerCard">
  <h3>{programmer.name}</h3>
  <img className="ProgrammerImage" src={programmer.img_url} alt={programmer.name} />
    <p>{programmer.languages}</p>
    <p>{programmer.time_zone}</p>
    <p>{programmer.email}</p>
  </div>
)

export default ProgrammerCard;
