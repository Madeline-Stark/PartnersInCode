import React from 'react';

const Programmers = ({ programmers }) => {
  const renderProgrammers = programmers.map(programmer =>
    <ul key={programmer.id}>
      <h3><li>{programmer.name}</li></h3>
      <li>Languages: {programmer.languages}</li>
      <li>Time Zone: {programmer.time_zone}</li>
      <li>Email: {programmer.email}</li>
    </ul>
  )

  return (
    <div>
      {renderProgrammers}
    </div>
  )
}

export default Programmers;
