const studentArr = [
  {
    id: 0,
    firstName: 'Ben',
    lastName: 'Jarret',
    isDead: false
  },
  {
    id: 1,
    firstName: 'Casey',
    lastName: 'Walker',
    isDead: false
  },
  {
    id: 2,
    firstName: 'Chie',
    lastName: 'Stroud',
    isDead: false
  },
  {
    id: 3,
    firstName: 'Chris',
    lastName: 'Meffley',
    isDead: false
  },
  {
    id: 4,
    firstName: 'Dani',
    lastName: 'Crosby',
    isDead: false
  },
  {
    id: 5,
    firstName: 'Ellie',
    lastName: 'Walker',
    isDead: false
  },
  {
    id: 6,
    firstName: 'Martin',
    lastName: 'Sisk',
    isDead: false
  },
  {
    id: 7,
    firstName: 'Gabby',
    lastName: 'Tobermann',
    isDead: false
  },
  {
    id: 8,
    firstName: 'Matthew',
    lastName: 'Gonzales',
    isDead: false
  },
  {
    id: 9,
    firstName: 'John',
    lastName: 'Maple',
    isDead: false
  },
  {
    id: 10,
    firstName: 'Holly',
    lastName: 'Parsons',
    isDead: false
  },
  {
    id: 11,
    firstName: 'Hunter',
    lastName: 'Juneau',
    isDead: false
  },
  {
    id: 12,
    firstName: 'Jim',
    lastName: 'Conner',
    isDead: false
  },
  {
    id: 13,
    firstName: 'Jesse',
    lastName: 'Robinson',
    isDead: false
  },
  {
    id: 14,
    firstName: 'Juan',
    lastName: 'Davila',
    isDead: false
  },
  {
    id: 15,
    firstName: 'Katy',
    lastName: 'Fry',
    isDead: false
  },
  {
    id: 16,
    firstName: 'Lindsey',
    lastName: 'Satterfield',
    isDead: false
  },
  {
    id: 17,
    firstName: 'Mitchell',
    lastName: 'Crumbley',
    isDead: false
  },
  {
    id: 18,
    firstName: 'Nathan',
    lastName: 'Keith',
    isDead: false
  },
  {
    id: 19,
    firstName: 'Rob',
    lastName: 'Cole',
    isDead: false
  },
  {
    id: 20,
    firstName: 'Sara',
    lastName: 'Schoonover',
    isDead: false
  },
  {
    id: 21,
    firstName: 'Sean',
    lastName: 'Rossettie',
    isDead: false
  },
  {
    id: 22,
    firstName: 'Honey-Rae',
    lastName: 'Swan',
    isDead: false
  },
  {
    id: 23,
    firstName: 'Tad',
    lastName: 'Sekeres',
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
  console.warn(victim);
  let i = 0;
  // reduce the probability selecting an already deceased student.
  while (studentArr[victim].isDead === true && i < 24) {
    victim = getVictim();
    i += 1;
  }
  studentArr[victim].isDead = true;
};

export { livingStudents, dearlyBeloved, followTheLight };
