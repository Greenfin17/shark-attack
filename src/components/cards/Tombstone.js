import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody,
  CardTitle
} from 'reactstrap';

const Tombstone = ({
  firstName,
  lastName
}) => (
  <Card className='tombstone' >
    <CardBody>
      <CardTitle tag='h5'>{firstName} {lastName}</CardTitle>
    </CardBody>
  </Card>
);

Tombstone.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default Tombstone;
