function displayMovie(response) {
  let movieTitle = document.querySelector("#movie-title");
  let releaseYear = document.querySelector("#release-year");
  let rating = document.querySelector("#rating");
  let releaseDate = document.querySelector("#release-date");
  let runtime = document.querySelector("#runtime");
  let genre = document.querySelector("#genre");
  let actors = document.querySelector("#actors");
  let plot = document.querySelector("#plot");
  // let movieImage = document.querySelector("#poster");

  movieTitle.innerHTML = response.data.Title;
  releaseYear.innerHTML = response.data.Year;
  rating.innerHTML = response.data.Rated;
  releaseDate.innerHTML = response.data.Released;
  runtime.innerHTML = response.data.Runtime;
  genre.innerHTML = response.data.Genre;
  actors.innerHTML = response.data.Actors;
  plot.innerHTML = response.data.Plot;
  //posterUrl = response.data.Poster;
  //console.log(posterUrl);
  // movieImage.setAttribute("href", response.data.Poster);
}

function search(movie) {
  let apiId = `30ea62ca`;
  let apiEndpoint = `http://www.omdbapi.com/?`;
  let movieName = document.querySelector("#movie-name").value;
  var formattedMovie = movieName.replace(/ /g, "+");
  let apiUrl = `${apiEndpoint}apikey=${apiId}&t=${formattedMovie}`;
  axios.get(apiUrl).then(displayMovie);
}

function handleSubmit(event) {
  event.preventDefault();
  let movie = document.querySelector("#movie-name");
  search(movie.value);
}

let searchMovie = document.querySelector("#search-form");
searchMovie.addEventListener("click", handleSubmit);

//search("The Mummy");
