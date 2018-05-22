var movies = {
  "Finding Nemo": {
    releaseDate: 2003,
    duration: 100,
    actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
    format: "DVD"
  },
  "Star Wars: Episode VI - Return of the Jedi": {
    releaseDate: 1983,
    duration: 134,
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    format: "DVD"
  },
  "Harry Potter and the Goblet of Fire": {
    releaseDate: 2005,
    duration: 157,
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    format: "Blu-ray"
  }
};

var titles = Object.keys(movies);

for (var i = 0; i < titles.length; i++) {
  var movie = movies[ titles[i] ];
  console.log(titles[i]);
  for( var l = 0; l < movie.actors.length; l++){
    console.log(movie.actors[l]);
  }
}