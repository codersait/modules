import { people } from "./utils/data.js";
import showPeople from "./utils/showPeople.js";
import get from "./utils/getElement.js";

const container = get('.container');
const button = get('button')

button.addEventListener('click', () => {
  container.innerHTML = showPeople(people)
})

