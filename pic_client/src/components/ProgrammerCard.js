import React from 'react'

const ProgrammerCard = ({programmer}) => (
  <div key={programmer.id}>
    <h3>{programmer.name}</h3>
    <p>Languages: {programmer.languages}</p>
    <p>Time Zone: {programmer.time_zone}</p>
    <p>Email: {programmer.email}</p>
  </div>
)

export default ProgrammerCard;
