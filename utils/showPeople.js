function showPeople(people) {
  let template = ''
  people.forEach(person => {
    template += `<p>${person.name} <strong>${person.age}</strong></p>`
  })
  return template;
}

export default showPeople