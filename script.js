

// API Key from RapidAPI (use your actual key here)
const apiKey = '93e69d4612mshb9882c64196bebap186e1ajsn4e3c4ca3b804';

// Endpoint for fetching top news
const url = 'https://newsnow.p.rapidapi.com/newsv2_top_news';

// Axios options to pass in the API request headers and body
const options = {
  method: 'POST',
  url: url,
  headers: {
    'x-rapidapi-key': apiKey,
    'x-rapidapi-host': 'newsnow.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    location: 'us',
    language: 'en',
    page: 1,
    time_bounded: false,
    from_date: '01/02/2021',
    to_date: '05/06/2021'
  }
};

// Function to fetch news based on search input
async function fetchNews() {
  const searchTerm = document.getElementById('search-bar').value.trim();
  if (searchTerm) {
    // Update the options data to filter by the search term (title or description)
    options.data.query = searchTerm;
  }

  try {
    const response = await axios.request(options);
    const articles = response.data.news; // Corrected from 'articles' to 'news'
    displayNews(articles);
  } catch (error) {
    console.error('Error fetching news:', error);
  }
}

// Function to display the fetched articles in the HTML
function displayNews(articles) {
  const newsContainer = document.getElementById('news-container');
  newsContainer.innerHTML = ''; // Clear existing articles

  if (!articles || articles.length === 0) {
    newsContainer.innerHTML = '<p>No articles found.</p>';
    return;
  }

  articles.forEach(article => {
    const articleElement = document.createElement('div');
    articleElement.classList.add('news-article');
    articleElement.innerHTML = `
      <h2><a href="${article.url}" target="_blank">${article.title}</a></h2>
      <p>${article.short_description}</p> <!-- Use short_description instead of description -->
      <img src="${article.top_image}" alt="Image" style="width: 100px; height: auto;"> <!-- Optional: Add image -->
    `;
    newsContainer.appendChild(articleElement);
  });
}

// Initialize fetching news on page load
fetchNews();

console.log(fetchNews);