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
  getJSON01: () => people,
  getHTML: () => person,
};