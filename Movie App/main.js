const Api_Link = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1"

fetch(Api_Link)
    .then(res => res.json())
    .then(data => data.results)