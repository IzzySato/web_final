const people = [
  {
    id: 1,
    name: 'Izzy Sato',
    sex: 'female',
    country: 'Canada',
    hobby: 'Garden'
  },
  {
    id: 2,
    name: 'Molly Pom',
    sex: 'female',
    country: 'Canada',
    hobby: 'Treats'
  },
  {
    id: 3,
    name: 'Ben White',
    sex: 'male',
    country: 'Canada',
    hobby: 'Sleep'
  },
];

const add = (obj) => {
  people.push(obj);
};

const getPeopleHTML = (json) => {
  json = json || people;
  return json.map(({ id, name, sex, country, hobby }) => `
    <ul class="personUL">
      <li>${id}</li>
      <li>${name}</li>
      <li>${sex}</li>
      <li>${country}</li>
      <li>${hobby}</li>
    </ul>
  `).join('');
};

const person = `
<ul class="personUl">
  <li>name: Izzy</li>
  <li>age: 20</li>
</ul>
<ul class="personUl">
  <li>name: Molly</li>
  <li>age: 10</li>
</ul>
<ul class="personUl">
  <li>name: Ben</li>
  <li>age: 5</li>
</ul>
`;

module.exports = {
  //TODO change name
  getJSON: () => people,
  getHTML: () => person,
  getPeopleHTML,
  add
};