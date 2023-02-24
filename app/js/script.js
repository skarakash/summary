const container = document.querySelector('.categories-container');

const getData = async () => {
  const res =  await fetch("app/assets/data/data.json")
  return await res.json()
}

const getCategoryClass =  category => {
  switch (category) {
    case 'Reaction':
      return 'category-reaction';
    case 'Memory':
      return 'category-memory';
    case 'Verbal':
      return 'category-verbal';
    case 'Visual':
      return 'category-visual';
    default:
      return '';
  }
}

const populate = (data) => {
  data.forEach(item => {
    const {category, score, icon } = item
    const categoryDiv = document.createElement('div');
    const className =  getCategoryClass(category);
    categoryDiv.classList.add(`category`, `${className}`);
    categoryDiv.innerHTML = `
      <img class="category-icon" src="${icon}" alt="${category}">
      <div class="category-name">${category}</div>
      <div class="score">
        <span class="actual-score">${score}</span>
        <span class="max-score"> / 100</span>
      </div>
  `;
    container.appendChild(categoryDiv);
  });
}

getData()
  .then(resp => populate(resp))
  .catch(err => console.error(err))



