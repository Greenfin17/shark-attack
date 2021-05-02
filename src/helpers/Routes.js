import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import SharkTank from '../views/SharkTank';
import Graveyard from '../views/Graveyard';

const Routes = ({
  studentArr,
  setStudentArr,
  deceasedArr,
  setDeceasedArr
}) => (
  <div>
    <Switch>
      <Route path='/shark-tank'
        component={() => <SharkTank
          studentArr={studentArr}
          setStudentArr={setStudentArr}
          setDeceasedArr={setDeceasedArr}
        /> }
      />
      <Route path='/graveyard'
        component={() => <Graveyard
          deceasedArr={deceasedArr}
        /> }
      />
      <Route path='*'
        component={() => <SharkTank
          studentArr={studentArr}
          setStudentArr={setStudentArr}
          setDeceasedArr={setDeceasedArr}
        /> }
      />
    </Switch>
  </div>
);

Routes.propTypes = {
  studentArr: PropTypes.array.isRequired,
  setStudentArr: PropTypes.func.isRequired,
  deceasedArr: PropTypes.array.isRequired,
  setDeceasedArr: PropTypes.func.isRequired
};

export default Routes;
