const form=document.querySelector("form");
const moviesName=document.querySelector('input');
form.onsubmit=(e)=>{
    e.preventDefault()
    fetch("https://api.themoviedb.org/3/search/movie?api_key=07f61212877dc265f2a47e6e8d290605&language=en-US&query="+moviesName.value+"&page=1&include_adult=false")
    .then((response)=>{return response.json()})
    .then((result)=>{console.log(result),
        showmovies(result.results)})
}

function showmovies(data){
    const result=document.querySelector("#results");
    result.innerHTML=""
    data.forEach((movie)=>{
        const movieDiv=document.createElement("div");
        movieDiv.classList.add("movie")
        const poster=document.createElement("img");
        const name=document.createElement("h3");
        poster.src="https://image.tmdb.org/t/p/original"+movie.poster_path;
        name.innerHTML=movie.original_title;
        movieDiv.append(poster);  
        movieDiv.append(name);
        result.append(movieDiv)

    })
}