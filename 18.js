function watchedMovies(Arr){
   let count = 0;
    for(let i=0; i<Arr.length; i++){
       const watched = Arr[i].watched;
       const title = Arr[i].title; 
       if(watched=== true){
        count +=1;
        console.log(title);
       }
    }
console.log("Total watched: " + count); 
return count;
    
}


const movies = [
  { title: "The Lion King",  year: 1994, rating: 8.5, watched: true  },
  { title: "Inception",      year: 2010, rating: 8.8, watched: true  },
  { title: "Black Panther",  year: 2018, rating: 7.3, watched: false },
  { title: "Up",             year: 2009, rating: 8.2, watched: true  },
  { title: "Interstellar",   year: 2014, rating: 8.6, watched: false },
];
watchedMovies(movies);