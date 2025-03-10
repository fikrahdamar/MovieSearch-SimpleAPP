$('.search-movie').on('click', function(){

$.ajax ({
    url : 'http://www.omdbapi.com/?apikey=e179c17d&s='+ $('.input-keyword').val(),
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
                                <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetails" data-imdbid="${m.imdbID}">Details</a>
                            </div>
                            </div>
                        </div>`
        
        $('.movie-container').html(cards);
        });

        $('.modal-detail-button').on('click', function () {
            $.ajax({
                url : 'http://www.omdbapi.com/?apikey=e179c17d&i=' + $(this).data('imdbid'),
                success: m => {
                    const movieDetails = `<div class="container-fluid">
                                            <div class="row">
                                                <div class="col-md-3">
                                                <img src="${m.Poster}" class="img-fluid">
                                                </div>
                                                <div class="col-md">
                                                <ul class="list-group">
                                                    <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                                                    <li class="list-group-item"><strong>Director : </strong> ${m.Director}</li>
                                                    <li class="list-group-item"><strong>Actor : </strong>${m.Actors}</li>
                                                    <li class="list-group-item"><strong>Genre : </strong>${m.Genre}</li>
                                                    <li class="list-group-item"><strong>Plot : </strong>${m.Plot}</li>
                                                </ul>
                                                </div>
                                            </div>
                                            </div>`;
                
                 $('.modal-body').html(movieDetails);
                },
                error : (e) =>{
                    console.log(e.responseText);
                }
            });
        })

    },
    error : (e) =>{
        console.log(e.responseText);
    }
});

});