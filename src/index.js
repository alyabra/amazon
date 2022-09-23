const API_KEY = 'api_key=27be4d179de34afb05223f9d58a82fcd';
const baseURL = 'https://api.themoviedb.org/3/';


//lazyLoader

const lazyLoader = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            const url = entry.target.getAttribute('src-data');
            // const url = movieImg.getAttribute('data-img',)
            entry.target.setAttribute('src', url);
            console.log('hola')
        }
    });
}); 

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

    //botones
    const nextScrollBottonContainer = document.createElement('div');
    const previewScrollBottonContainer = document.createElement('div');
    const nextButton = document.createElement('div');
    const previewButton = document.createElement('div');
    const imgArrow = document.createElement('img');
    const imgArrowR = document.createElement('img');
    imgArrow.src = './icons/flecha-hacia-abajo-para-navegar.png';
    imgArrowR.src = './icons/flecha-hacia-abajo-para-navegar.png';
    nextButton.className = 'buttonNext'; 
    previewButton.className = 'buttonPreview';
    imgArrow.className = 'icons rotate90';
    imgArrowR.className = 'icons rotate270';
    previewButton.appendChild(imgArrow);
    nextButton.appendChild(imgArrowR);
    nextScrollBottonContainer.appendChild(nextButton);
    previewScrollBottonContainer.appendChild(previewButton)

    previewScrollBottonContainer.className = 'scroll-bottom-container-left';
    nextScrollBottonContainer.className = 'scroll-bottom-container-right';
    
    previewScrollBottonContainer.addEventListener('click', () => {
        const dx = categoryContainerList.clientWidth
        const start = categoryContainerList.scrollLeft
        console.log(start);
        categoryContainerList.scrollTo(start-dx, start);
    });
    nextScrollBottonContainer.addEventListener('click', () => {
        const dx = categoryContainerList.clientWidth
        const start = categoryContainerList.scrollLeft
        console.log(start);
        categoryContainerList.scrollTo(start+dx, start);
    });
    
    
    categoryContainerList.append(nextScrollBottonContainer, previewScrollBottonContainer);
    // categoriaContainer.appendChild(categoryContainerList)

    moviesArray.forEach(movie => {
      
        // console.log(movie);
        const movieContainer = document.createElement('div');
        const movieImg = document.createElement('img');
    
        
        
        movieContainer.className = 'movie-container';
        movieImg.className = 'movie-img';
        movieImg.setAttribute('src-data', 'https://image.tmdb.org/t/p/w300/'+ movie.poster_path);

        lazyLoader.observe(movieImg);

        movieContainer.addEventListener('click', () => {
            console.log(movieDetail)
            console.log('movieId', movie.id)
            location.hash =`movie=${movie.id}` //movie.id
            createMovieDetailPageWithId(movie);
        })
        //movieImg.src = 'https://image.tmdb.org/t/p/w300/'+ movie.poster_path;

        
        movieContainer.appendChild(movieImg);
        categoryContainerList.appendChild(movieContainer);
        
        //categoriaContainer.appendChild(categoryContainerList);

        // container.appendChild(categoryTitle);
        // container.appendChild(categoryContainerList);

    // console.log(movie.title);        
    });
    categoriaContainer.appendChild(categoryContainerList);
    container.appendChild(categoriaContainer);
    //container.appendChild(categoryContainerList);
}

//fetching
//https://api.themoviedb.org/3/genre/movie/list?api_key=27be4d179de34afb05223f9d58a82fcd

urlTreading = 'https://api.themoviedb.org/3/trending/movie/week?api_key=27be4d179de34afb05223f9d58a82fcd'

async function fetchData(container, url, categoryNameList) {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    const movies = data.results;
    createCategoryMovieList(container, movies, categoryNameList);
}

fetchData(mainHome, urlTreading, "Más vistos");

async function getMovieGenres() {
    // const anotherCategories = document.getElementById('anotherCategories');
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
        // containerNameGendrer.insertBefore(li, anotherCategories );
        containerNameGendrer.appendChild(li);

        // 
        fetchData(mainHome, url_genres, item.name);

    });
}

async function getMovieDetails(id) {
    // const baseURL = 'https://image.tmdb.org/t/p/w300/'
    const containerList = document.getElementById('headerList');

    //"header-container
    const headerConter = document.createElement('div');
    headerConter.className = "header-container";

    // const container = document.getElementById('header-container--right');
    const container = document.createElement('div');
    container.className = 'header-container--right'

    // const containerLeft = document.getElementById('header-container--left');
    const containerLeft = document.createElement('div');
    containerLeft.className = 'header-container--left';

    const movieImg = document.createElement('img');    
    const title = document.createElement('h2');
    const overview = document.createElement('p');
    const ul = document.createElement('ul');

    // const img = document.createElementById('img')
    // data = `${baseURL}movie/${id}/${API_KEY}`
    const response = await fetch(`${baseURL}movie/${id}?${API_KEY}`);
    const data = await response.json();
    // console.log(data, data.backdrop_path)
    movieImg.src = `https://image.tmdb.org/t/p/w300/${data.backdrop_path}`;
    title.innerHTML = data.title;
    overview.innerHTML = data.overview;

    //lista de generos
    const arrayGenres = data.genres;
    // for (let i=0; i<7; i++) {
    //     const divRadio = document.createElement('div');
    //     divRadio.className = 'input-radio';
    //     containerDots.appendChild(divRadio);
    // }

     arrayGenres.forEach(item => {
         const li = document.createElement('li');
         li.innerHTML = item.name;
         ul.appendChild(li);
     });

    containerLeft.appendChild(title);
    containerLeft.appendChild(overview);
    containerLeft.appendChild(ul);
    container.appendChild(movieImg);

    headerConter.appendChild(containerLeft);
    headerConter.appendChild(container);
    containerList.appendChild(headerConter);


    // container.style.backgroundImage = `url(https://image.tmdb.org/t/p/w300/${data.backdrop_path})`;
    // console.log(`url(https://image.tmdb.org/t/p/w300/${data.backdrop_path})`)
    // container.style.backgroundSize = '40%';
    // container.style.backgroundRepeat = 'no-repeat';
    // movieImg.src = 'https://image.tmdb.org/t/p/w300/'+ movie.backdrop_path;
    // poster_path
}

// https://api.themoviedb.org/3/trending/movie/week?api_key=27be4d179de34afb05223f9d58a82fcd

async function createHeaderList() {
     const response = await fetch(`${baseURL}trending/movie/day?${API_KEY}`);
     const data = await response.json();
     const arrayMovies = data.results;

     const containerDots = document.getElementById('dots-header-container')

    
    for (let i=0; i<7; i++) {
        const divRadio = document.createElement('div');
        // divRadio.className = 'input-radio';
        // divRadio.id = `r${i}`;
        // console.log(divRadio.id);
        containerDots.appendChild(divRadio);
        // console.log(arrayMovies[i]);
        getMovieDetails(arrayMovies[i].id);

    }

}

async function createMovieDetailPageWithId(movie) {
    const title = document.querySelector('.movieDetail-title');
    const overview = document.querySelector('.movieDetail-description');
    overview.innerHTML = movie.overview;
    title.innerHTML = movie.title;
    movieDetail.style.backgroundImage = `url('https://image.tmdb.org/t/p/w300/${movie.backdrop_path}')`

    fetchData(movieDetail, `https://api.themoviedb.org/3/movie/${movie.id}/similar?api_key=27be4d179de34afb05223f9d58a82fcd`, `Símilares a ${movie.title}`)

}
getMovieGenres();
createHeaderList();




// getMovieDetails(338953);
// getMovieDetails(338953);
// getMovieDetails(338953)
// getMovieDetails(338953)

//  getMovieGenres();