//function displayMovie(event) {
// event.preventDefault();
//}

function search(movie) {
  let apiId = `30ea62ca`;
  let apiEndpoint = `http://www.omdbapi.com/?`;
  let movieName = document.querySelector("#movie-name").value;
  var formattedMovie = movieName.replace(/ /g, "+");
  let apiUrl = `${apiEndpoint}apikey=${apiId}&t=${formattedMovie}`;
  console.log(apiUrl);
  //axios.get(apiUrl).then(displayMovie);
}

//http://www.omdbapi.com/?apikey=30ea62ca&t=The+Mummy

function handleSubmit(event) {
  event.preventDefault();
  let movie = document.querySelector("#movie-name");
  search(movie.value);
}

let searchMovie = document.querySelector("#search-form");
searchMovie.addEventListener("click", handleSubmit);
