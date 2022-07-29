const API_KEY = 'api_key=27be4d179de34afb05223f9d58a82fcd';
const baseURL = 'https://api.themoviedb.org/3/';

const mainHome = document.getElementById('main-home');


// console.log(mainHome);
function createCategoryMovieList(container, moviesArray, categoryNameList) {
    const categoriaContainer = document.createElement('div');
    categoriaContainer.className = 'categoria-container';
    const categoryTitle = document.createElement('h2');
    const categoryContainerList = document.createElement('div');
    categoryTitle.className = 'category-title';
    categoryContainerList.className = "category-container--list";
    categoryTitle.innerHTML = categoryNameList;
    categoriaContainer.appendChild(categoryTitle);

    moviesArray.forEach(movie => {

        // console.log(movie);
        const movieContainer = document.createElement('div');
        const movieImg = document.createElement('img');
    
        
        
        movieContainer.className = 'movie-container';
        movieImg.className = 'movie-img';
        movieImg.src = 'https://image.tmdb.org/t/p/w300/'+ movie.poster_path;
    
        
        
        movieContainer.appendChild(movieImg);
        categoryContainerList.appendChild(movieContainer);
        categoriaContainer.appendChild(categoryContainerList);

        // container.appendChild(categoryTitle);
        // container.appendChild(categoryContainerList);

    // console.log(movie.title);        
    });

    container.appendChild(categoriaContainer);
    container.appendChild(categoryContainerList);
}

//fetching
//https://api.themoviedb.org/3/genre/movie/list?api_key=27be4d179de34afb05223f9d58a82fcd

urlTreading = 'https://api.themoviedb.org/3/trending/movie/week?api_key=27be4d179de34afb05223f9d58a82fcd'

async function fetchData(url, categoryNameList) {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    const movies = data.results;
    createCategoryMovieList(mainHome, movies, categoryNameList);
}

fetchData(urlTreading, "Más vistos");

async function getMovieGenres() {
    const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=27be4d179de34afb05223f9d58a82fcd');
    const data = await response.json();
    // console.log('gneres', data);
    genres = data.genres;
    const containerNameGendrer = document.getElementById("downdrop-gendres");
    // console.log('containerNameGendrer',containerNameGendrer);
    // const response
     genres.forEach(item => {
        const li = document.createElement('li');
        //  console.log(item.name, item.id);
         const url_genres = `https://api.themoviedb.org/3/discover/movie?api_key=27be4d179de34afb05223f9d58a82fcd&with_genres=${item.id}`
        li.innerHTML = item.name;
        //  li.appendChild(document.createTextNode("hols"))
         //console.log("li",li);
        //  console.log("li", li)
        containerNameGendrer.appendChild(li);

         fetchData(url_genres, item.name);

    });
}

async function getMovieDetails(id) {
    // const baseURL = 'https://image.tmdb.org/t/p/w300/'
    const movieImg = document.createElement('img');
    const container = document.getElementById('header-container');
    // const img = document.createElementById('img')
    // data = `${baseURL}movie/${id}/${API_KEY}`
    const response = await fetch(`${baseURL}movie/${id}?${API_KEY}`);
    const data = await response.json();
    console.log(data, data.backdrop_path)
    movieImg.src = `https://image.tmdb.org/t/p/w300/${data.backdrop_path}`;
    container.appendChild(movieImg);
    // container.style.backgroundImage = `url(https://image.tmdb.org/t/p/w300/${data.backdrop_path})`;
    console.log(`url(https://image.tmdb.org/t/p/w300/${data.backdrop_path})`)
    // container.style.backgroundSize = '40%';
    // container.style.backgroundRepeat = 'no-repeat';
    // movieImg.src = 'https://image.tmdb.org/t/p/w300/'+ movie.backdrop_path;
    // poster_path
}   
 getMovieDetails(338953);

//  getMovieGenres();