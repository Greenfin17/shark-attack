import React from 'react';
import PropTypes from 'prop-types';
import Tombstone from '../components/cards/Tombstone';
import graveyard from '../assets/images/graveyard-alpha1.png';

const Graveyard = ({ deceasedArr }) => (
  <div className='graveyard-container'>
    <h1>Graveyard</h1>
    <img src={graveyard} alt='Graveyard background image' />
    <div className='shark-tank d-flex flex-row flex-wrap justify-content-around'>
      {deceasedArr && deceasedArr.map((student) => (
        <Tombstone
          key={student.id}
          firstName={student.firstName}
          lastName={student.lastName}
        />
      ))}
    </div>
  </div>
);

Graveyard.propTypes = {
  deceasedArr: PropTypes.array
};

export default Graveyard;
