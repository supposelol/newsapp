const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

async function fetchNews() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayNews(data.articles);
  } catch (error) {
    console.error('There was an error!', error);
  }
}

function displayNews(articles) {
  const newsDiv = document.querySelector('#news');
  for (const article of articles) {
    const articleDiv = document.createElement('div');
    articleDiv.className = 'card mb-3'; // Apply Bootstrap card class

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    //create and append a headline to the articleDiv
    const title = document.createElement('h4');
    title.textContent = article.title;
    cardBody.appendChild(title);

    const description = document.createElement('p');
    description.textContent = article.description;
    cardBody.appendChild(description);

    const author = document.createElement('p');
    author.textContent = `Author: ${article.author}`;
    cardBody.appendChild(author);

    const publishedAt = document.createElement('p');
    publishedAt.textContent = `Published at: ${article.publishedAt}`;
    cardBody.appendChild(publishedAt);


    const image = document.createElement('img');
    image.src = article.urlToImage;
    cardBody.appendChild(image);


    const link = document.createElement('a');
    link.textContent = 'Read More';
    link.href = article.url;
    link.target = '_blank';
    cardBody.appendChild(link);


    newsDiv.appendChild(articleDiv);
  }
}

fetchNews();