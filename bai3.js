const calculateAge = (students) => {
    return students.map(({ birthYear = null, ...rest }) => {
        const currentYear = new Date().getFullYear();
        const age = birthYear !== null ? currentYear - birthYear : 18;
        return { ...rest, birthYear, age };
      });
    };



const students = [
    {
        id: 'std001',
        name: 'Student 1',
        birthYear: 2001,
        sex: 'male'
    },
    {
        id: 'std002',
        name: 'Student 2',
        birthYear: 1996,  
        sex: 'female'
    },
    {
        id: 'std003',
        name: 'Student 3',
        birthYear: null,
        sex: 'male'
    },
    {
        id: 'std004',
        name: 'Student 4',
        birthYear: 1999,
        sex: 'male'
    }
]

console.log(calculateAge(students))