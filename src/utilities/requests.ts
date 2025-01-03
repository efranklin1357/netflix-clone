const API_KEY = "b375e21e430ae1cd6e35a95c25271663";
const BASE_URL = 'https://api.themoviedb.org/3';

const requests = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
};

export async function fetchMovieDetails(movieId: number) {
  const response = await fetch(`${BASE_URL}/movie/${movieId}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzc1ZTIxZTQzMGFlMWNkNmUzNWE5NWMyNTI3MTY2MyIsIm5iZiI6MTczNTY2NTMwNS44NzYsInN1YiI6IjY3NzQyNjk5YmYxMGZmMTk4NDYyMWM2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8On70rlpTcmCJbHdLV06AejBYO45u5PY0brZbwvTIsE`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch movie details');
  }

  const data = await response.json();
  return data;
}

export default requests;