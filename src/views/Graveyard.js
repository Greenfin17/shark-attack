import React from 'react';
import PropTypes from 'prop-types';
import Tombstone from '../components/cards/LiveStudent';

const Graveyard = ({ deceasedArr }) => (
  <div className='shark-tank d-flex flex-row flex-wrap justify-content-around'>
    {deceasedArr.map((student) => (
      <Tombstone
        key={student.id}
        firstName={student.firstName}
        lastName={student.lastName}
      />
    ))}
  </div>
);

Graveyard.propTypes = {
  deceasedArr: PropTypes.array.isRequired
};

export default Graveyard;
