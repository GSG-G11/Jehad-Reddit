/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const searchedValue = window.location.href.split('/')[4];
fetch(`/search/${searchedValue}`)
  .then((data) => data.json())
  .then(({ post }) => post.data.children)
  .then((children) => {
    children.forEach((element) => {
      if (element.data.thumbnail.endsWith('jpg') && element.data.thumbnail !== 'self') {
        const divBox = createElement('div', 'search-box');
        const h2 = createElement('h2', 'search-title');
        h2.textContent = element.data.title;
        const image = createElement('img', 'search-img');
        console.log(element.data.thumbnail);
        image.src = element.data.thumbnail;
        divBox.append(image, h2);
        mainSearch.append(divBox);
      }
    });
  })
  .catch((err) => console.log(err));
