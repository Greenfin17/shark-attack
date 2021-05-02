import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { dearlyBeloved, followTheLight, livingStudents } from '../../helpers/data/studentsData';

const SharkAttack = ({
  setStudentArr,
  setDeceasedArr,
}) => {
  const handleClick = () => {
    followTheLight();
    setStudentArr(livingStudents());
    setDeceasedArr(dearlyBeloved());
  };
  return (
    <Button className='btn btn-success btn-lg mb-4'
      onClick={handleClick}>Shark Attack!</Button>
  );
};

SharkAttack.propTypes = {
  setStudentArr: PropTypes.func,
  setDeceasedArr: PropTypes.func
};

export default SharkAttack;
