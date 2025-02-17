$.ajax ({
    url : 'http://www.omdbapi.com/?apikey=e179c17d&s=harry potter',
    success : results => {
        console.log(results);
    },
    error : (e) =>{
        console.log(e.responseText);
    }
});