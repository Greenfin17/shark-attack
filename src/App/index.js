import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Routes from '../helpers/Routes';
import { dearlyBeloved, livingStudents } from '../helpers/data/studentsData';
import Navbar from '../components/Navbar';

function App() {
  const [studentArr, setStudentArr] = useState([]);
  const [deceasedArr, setDeceasedArr] = useState([]);

  useEffect(() => {
    setStudentArr(livingStudents());
    setDeceasedArr(dearlyBeloved());
    console.warn(studentArr);
  }, []);

  return (
    <div className='App'>
      <Router>
        <Navbar />
          <Routes
            studentArr={studentArr}
            setStudentArr={setStudentArr}
            deceasedArr={deceasedArr}
            setDeceasedArr={setDeceasedArr}
          />
      </Router>
    </div>
  );
}

export default App;
