// Q5. Movie Collection
// Create an array of 4 movie objects. Each object should contain:
// - title
// - rating
// - year
// Print the details of movies whose rating is greater than 8.
const movies = [
    { title: "Inception", rating: 8.8, year: 2010 },
    { title: "Avatar", rating: 7.9, year: 2009 },
    { title: "Interstellar", rating: 8.7, year: 2014 },
    { title: "Joker", rating: 7.5, year: 2019 }
];
const newMovies = movies.filter((movie) => movie.rating > 8);
console.log(newMovies);
