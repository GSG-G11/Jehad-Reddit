/* eslint-disable no-undef */
fetch('/home')
  .then((data) => data.json())
  .then(({ post }) => post.data.children)
  .then((children) => {
    children.forEach((element) => {
      if (element.data.thumbnail.includes('.jpg')) {
        // trend box
        const trendBoxLink = createElement('a', 'trending-box');
        trendBoxLink.href = element.data.url;
        trendBoxLink.setAttribute('target', '_blank');
        // trend title
        const p = createElement('p', 'box-title');
        p.textContent = `${element.data.title.slice(0, 50)}...`;

        // trend image
        const image = createElement('img', 'box-img');
        image.src = element.data.thumbnail;

        // append elements
        trendBoxLink.append(p, image);
        trendingPostsContainer.append(trendBoxLink);
      }
    });
  })
  .catch((err) => console.log(err));
