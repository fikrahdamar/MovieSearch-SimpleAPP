$.ajax ({
    url : 'http://www.omdbapi.com/?apikey=e179c17d&s=harry potter',
    success : results => {
        const movies = results.Search;
        let cards = '';
        movies.forEach(m => {
            cards += `<div class="col-md-4 my-5">
                            <div class="card">
                            <img src="${m.Poster}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${m.Title}</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#movieDetails">Details</a>
                            </div>
                            </div>
                        </div>`
        
        $('.movie-container').html(cards);
        });
    },
    error : (e) =>{
        console.log(e.responseText);
    }
});