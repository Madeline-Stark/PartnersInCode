import React from 'react';
import { fetchProgrammers, deleteProgrammer } from '../actions/programmers';

const ProgrammerCard = ({ programmer }) => (
  <div key={programmer.id} className="ProgrammerCard">
  <h3>{programmer.name}</h3>
  <img className="ProgrammerImage" src={programmer.img_url} alt={programmer.name} />
    <p>{programmer.languages}</p>
    <p>{programmer.time_zone}</p>
    <p>{programmer.email}</p>
    <span onClick={() => this.props.deleteProgrammer(programmer.id)}>Delete</span>
  </div>
)

export default ProgrammerCard;
