import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from '../components/cards/LiveStudent';
import SharkAttack from '../components/buttons/SharkAttack';
import { followTheLight } from '../helpers/data/studentsData';

const SharkTank = ({
  studentArr,
  setStudentArr,
  setDeceasedArr
}) => (
  <div className='shark-tank-container'>
    <div className='shark-tank d-flex flex-row flex-wrap justify-content-around'>
      {studentArr.map((student) => (
        <LiveStudent
          key={student.id}
          firstName={student.firstName}
          lastName={student.lastName}
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
