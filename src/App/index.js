import React, { useState, useEffect } from 'react';
import './App.scss';
import SharkTank from '../views/SharkTank';
import GraveYard from '../views/Graveyard';
import { dearlyBeloved, livingStudents } from '../helpers/data/studentsData';

function App() {
  const [studentArr, setStudentArr] = useState([]);
  const [deceasedArr, setDeceasedArr] = useState([]);

  useEffect(() => {
    setStudentArr(livingStudents());
    setDeceasedArr(dearlyBeloved());
    console.warn(deceasedArr);
  }, []);

  return (
    <div className='App'>
      <SharkTank
        studentArr={studentArr}
        setStudentArr={setStudentArr}
        setDeceasedArr={setDeceasedArr}
      />
      <GraveYard
        deceasedArr={deceasedArr}
      />
    </div>
  );
}

export default App;
