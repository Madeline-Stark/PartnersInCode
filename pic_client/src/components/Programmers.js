import React from 'react';
import ProgrammerCard from '../components/ProgrammerCard';

const Programmers = ({ programmers }) => {
  const renderProgrammers = programmers.map(programmer => <ProgrammerCard programmer={programmer} />

  )

  return (
    <div>
      {renderProgrammers}
    </div>
  )
}

export default Programmers;
