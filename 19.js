function findHighestRating(Arr) {
    if (Arr.length === 0) {
        return undefined; 
    }

    let largestMovie = Arr[0]; 

    for (let i = 1; i < Arr.length; i++) {
        if (Arr[i].rating > largestMovie.rating) {
            largestMovie = Arr[i]; 
        }
    }

    return largestMovie; 
}




const movies = [
  { title: "The Lion King",  year: 1994, rating: 8.5, watched: true  },
  { title: "Inception",      year: 2010, rating: 8.8, watched: true  },
  { title: "Black Panther",  year: 2018, rating: 7.3, watched: false },
  { title: "Up",             year: 2009, rating: 8.2, watched: true  },
  { title: "Interstellar",   year: 2014, rating: 8.6, watched: false },
];

const highestRated = findHighestRating(movies);
console.log(highestRated); 


