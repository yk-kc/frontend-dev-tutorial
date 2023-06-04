const person = {
  name: ['Code', 'Mafia'],
  age: 30,
  gender: 'male',
  interests: {
    sports: 'soccer',
    music: 'piano',
  },
  getFullName: func,
}

const ageKey = 'age'
person[ageKey] = 31
console.log(person.age)
