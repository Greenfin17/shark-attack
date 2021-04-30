import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody,
  CardTitle
} from 'reactstrap';

const LiveStudent = ({
  firstName,
  lastName
}) => (
  <Card className='live-student' >
    <CardBody>
      <CardTitle tag='h5'>{firstName} {lastName}</CardTitle>
    </CardBody>
  </Card>
);

LiveStudent.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default LiveStudent;
