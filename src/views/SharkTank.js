import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from '../components/cards/LiveStudent';
import SharkAttack from '../components/buttons/SharkAttack';
import { followTheLight } from '../helpers/data/studentsData';
import sharkfin from '../assets/images/shark-fin-alpha.png';

const SharkTank = ({
  studentArr,
  setStudentArr,
  setDeceasedArr
}) => (
  <div className='shark-tank-container'>
    <div className='shark-tank=header'>
      <img className='header-fin-left' src={sharkfin} />
      <h1 className='shark-tank-title'> Shark Tank</h1>
      <img className='header-fin-right' src={sharkfin} />
    </div>
    <div className='shark-tank d-flex flex-row flex-wrap justify-content-around'>
      {studentArr.map((student) => (
        <LiveStudent
          key={student.id}
          firstName={student.firstName}
          lastName={student.lastName}
          gender={student.gender}
        />
      ))}
    </div>
    <SharkAttack
      followTheLight={followTheLight}
      setStudentArr={setStudentArr}
      setDeceasedArr={setDeceasedArr}
    />
  </div>
);

SharkTank.propTypes = {
  studentArr: PropTypes.array.isRequired,
  setStudentArr: PropTypes.func.isRequired,
  setDeceasedArr: PropTypes.func.isRequired
};

export default SharkTank;
