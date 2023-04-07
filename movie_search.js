const form = document.querySelector("form");
const moviesName = document.querySelector('input');
form.onsubmit = (e) => {
    e.preventDefault()
    fetch("https://api.themoviedb.org/3/search/movie?api_key=07f61212877dc265f2a47e6e8d290605&language=en-US&query=" + moviesName.value + "&page=1&include_adult=false")
        .then((response) => { return response.json() })
        .then((result) => {
            console.log(result),
            showmovies(result.results)
        })
}

function showmovies(data) {
    const result = document.querySelector("#results");
    result.innerHTML = ""
    if (data.length === 0) {
        const nomovies = document.createElement("h1");
        nomovies.innerHTML = "Nothing found by this name .search something else..."
        result.append(nomovies)
    }
    else {
        data.forEach((movie) => {
            const movieDiv = document.createElement("div");
            movieDiv.classList.add("movie")
            const poster = document.createElement("img");
            const name = document.createElement("h3");
            poster.src = (movie.poster_path) ? "https://image.tmdb.org/t/p/original" + movie.poster_path : "no-poster-available.jpg";
            name.innerHTML = titleName(movie.original_title);
            movieDiv.append(poster);
            movieDiv.append(name);
            result.append(movieDiv)

            

        })
    }

}
function titleName(name) {
    if (name.length > 40) {
        return name.slice(0, 40) + "...."
    }
    else {
        return name
    }
}