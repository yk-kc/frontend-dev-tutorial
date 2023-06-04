const person = {
  name: ['Code', 'Mafia'],
  age: 30,
  gender: 'male',
  interests: {
    sports: 'soccer',
    music: 'piano',
  },
  getFullName: function () {
    console.log(this.name[0] + this.name[1])
  },
}

const ageKey = 'age'
person[ageKey] = 31
console.log(person.age)
person.getFullName()
