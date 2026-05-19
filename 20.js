
function buildMovieString(arr) {
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    let movieText = `${arr[i].title} (${arr[i].year})`;

    if (i === 0) {
      result += movieText;
    } else {
      result += ", " + movieText;
    }
  }

  return result;
}

const movies = [
  { title: "The Lion King",  year: 1994, rating: 8.5, watched: true  },
  { title: "Inception",      year: 2010, rating: 8.8, watched: true  },
  { title: "Black Panther",  year: 2018, rating: 7.3, watched: false },
  { title: "Up",             year: 2009, rating: 8.2, watched: true  },
  { title: "Interstellar",   year: 2014, rating: 8.6, watched: false },
];

console.log(buildMovieString(movies));
