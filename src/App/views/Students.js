import React from 'react';
import PropTypes from 'prop-types';

const Students = ({ studentsArr}) =
  (
    <div className='live-students'>
      {studentsArr.map((student) => (
        <LiveStudent
          firstName={student.firstName}
          lastName={student.lastName}
        />
      ))}
    </div>
  );
