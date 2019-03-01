import React from 'react';

const Programmers = ({ programmers }) => {
  const renderProgrammers = programmers.map(programmer =>
    <p key={programmer.id}>{programmer.name}</p>
  )

  return (
    <div>
      {renderProgrammers}
    </div>
  )
}

export default Programmers;
