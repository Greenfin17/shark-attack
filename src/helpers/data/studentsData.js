const studentArr = [
  {
    id: 0,
    firstName: 'Ben',
    lastName: 'Jarret',
    gender: 'M',
    isDead: false
  },
  {
    id: 1,
    firstName: 'Casey',
    lastName: 'Walker',
    gender: 'M',
    isDead: false
  },
  {
    id: 2,
    firstName: 'Chie',
    lastName: 'Stroud',
    gender: 'F',
    isDead: false
  },
  {
    id: 3,
    firstName: 'Chris',
    lastName: 'Meffley',
    gender: 'M',
    isDead: false
  },
  {
    id: 4,
    firstName: 'Dani',
    lastName: 'Crosby',
    gender: 'F',
    isDead: false
  },
  {
    id: 5,
    firstName: 'Ellie',
    lastName: 'Walker',
    gender: 'F',
    isDead: false
  },
  {
    id: 6,
    firstName: 'Martin',
    lastName: 'Sisk',
    gender: 'M',
    isDead: false
  },
  {
    id: 7,
    firstName: 'Gabby',
    lastName: 'Tobermann',
    gender: 'F',
    isDead: false
  },
  {
    id: 8,
    firstName: 'Matthew',
    lastName: 'Gonzales',
    gender: 'M',
    isDead: false
  },
  {
    id: 9,
    firstName: 'John',
    lastName: 'Maple',
    gender: 'M',
    isDead: false
  },
  {
    id: 10,
    firstName: 'Holly',
    lastName: 'Parsons',
    gender: 'F',
    isDead: false
  },
  {
    id: 11,
    firstName: 'Hunter',
    lastName: 'Juneau',
    gender: 'M',
    isDead: false
  },
  {
    id: 12,
    firstName: 'Jim',
    lastName: 'Conner',
    gender: 'M',
    isDead: false
  },
  {
    id: 13,
    firstName: 'Jesse',
    lastName: 'Robinson',
    gender: 'M',
    isDead: false
  },
  {
    id: 14,
    firstName: 'Juan',
    lastName: 'Davila',
    gender: 'M',
    isDead: false
  },
  {
    id: 15,
    firstName: 'Katy',
    lastName: 'Fry',
    gender: 'F',
    isDead: false
  },
  {
    id: 16,
    firstName: 'Lindsey',
    lastName: 'Satterfield',
    gender: 'F',
    isDead: false
  },
  {
    id: 17,
    firstName: 'Mitchell',
    lastName: 'Crumbley',
    gender: 'M',
    isDead: false
  },
  {
    id: 18,
    firstName: 'Nathan',
    lastName: 'Keith',
    gender: 'M',
    isDead: false
  },
  {
    id: 19,
    firstName: 'Rob',
    lastName: 'Cole',
    gender: 'M',
    isDead: false
  },
  {
    id: 20,
    firstName: 'Sara',
    lastName: 'Schoonover',
    gender: 'F',
    isDead: false
  },
  {
    id: 21,
    firstName: 'Sean',
    lastName: 'Rossettie',
    gender: 'M',
    isDead: false
  },
  {
    id: 22,
    firstName: 'Honey-Rae',
    lastName: 'Swan',
    gender: 'F',
    isDead: false
  },
  {
    id: 23,
    firstName: 'Tad',
    lastName: 'Sekeres',
    gender: 'M',
    isDead: false
  }
];

const livingStudents = () => studentArr.flatMap((student) => (
  !student.isDead ? student : []));

const dearlyBeloved = () => studentArr.flatMap((student) => (
  student.isDead ? student : []));

const getVictim = () => Math.floor(Math.random() * studentArr.length);

const followTheLight = () => {
  let victim = getVictim();
  let i = 0;
  // reduce the probability selecting an already deceased student.
  while (studentArr[victim].isDead === true && i < 24) {
    victim = getVictim();
    i += 1;
  }
  studentArr[victim].isDead = true;
};

export { livingStudents, dearlyBeloved, followTheLight };
