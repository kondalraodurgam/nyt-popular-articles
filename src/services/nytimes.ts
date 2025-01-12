const API_KEY = "1xZAeiTPA6vsWWJMzFtVf89mJEM6CPKx";
const BASE_URL = 'https://api.nytimes.com/svc/mostpopular/v2';

export async function fetchMostViewedArticles(period: 1 | 7 | 30 = 7) {
  const response = await fetch(
    `${BASE_URL}/viewed/${period}.json?api-key=${API_KEY}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }

  const data = await response.json();
  return data.results;
}