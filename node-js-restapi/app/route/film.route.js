module.exports = function(app) {
 
    const films = require('../controller/film.controller.js');
 
    // Create a new film
    app.post('/api/films', films.create);
 
    // Retrieve all film
    app.get('/api/films', films.findAll);
 
    // Retrieve a single film by Id
    app.get('/api/films/:filmId', films.findById);

    // Retrive a top 3 of film
    app.get('/api/films/top3/search', films.top3films);
    
    // Retrieve a single film by Id
    app.get('/api/films/searchByTitle/:filmTitle', films.findByTitle);
 
    // Update a film with Id
    app.put('/api/films', films.update);
 
    // Delete a films with Id
    app.delete('/api/films/:filmId', films.delete);
}