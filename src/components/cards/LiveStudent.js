import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody,
  CardTitle
} from 'reactstrap';
// import fish from '../../assets/images/Gold-Fish-Template.jpg';
import butterflyM from '../../assets/images/butterfly.jpg';
import butterflyF from '../../assets/images/butterfly-f.jpg';

const LiveStudent = ({
  firstName,
  lastName,
  gender
}) => (
  <Card className='live-student' >
    <CardBody>
      { gender === 'M' ? <img src={butterflyM} /> : <img src={butterflyF} /> }
      <CardTitle tag='h5'>{firstName} {lastName}</CardTitle>
    </CardBody>
  </Card>
);

LiveStudent.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired
};

export default LiveStudent;
