import React from 'react';

const Programmers = ({ programmers }) => {
  const renderProgrammers = programmers.map(programmer =>
    <span key={programmer.id}>
      <h3>{programmer.name}</h3>
      <p>Languages: {programmer.languages}</p>
      <p>Time Zone: {programmer.time_zone}</p>
      <p>Email: {programmer.email}</p>
    </span>
  )

  return (
    <div>
      {renderProgrammers}
    </div>
  )
}

export default Programmers;
