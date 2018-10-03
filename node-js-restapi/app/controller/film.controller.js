const db = require('../config/db.config.js');
const Film = db.films;
const main_connection = {
	host : 'localhost',
	user : 'root',
	password : 'root',
	database : 'sys'
};

let CONSTANS = require("../../constans.js");

let mysql = require('mysql');

// Post a film
exports.create = (req, res) => {
	// Save to MySQL database
	let film = req.body;

	let connection = mysql.createConnection(CONSTANS.MAIN_CONNECTION);

	connection.connect();

	let title = req.params.filmTitle;

	let sql = CONSTANS.INSERT.FILM.replace('pi_title', film.title);

	sql = sql.replace('pi_title', film.title);

	//let sql = "call sys.get_film_by_title('"+req.params.filmTitle+"')";

	connection.query(sql, (error, results, fields) => {
		  if (error) {
		    console.error(error.message);
		  }
		  console.log('Executing: '+sql);
			res.send(film);
		});

		connection.end();

	//Film.create(film).then(result => {
		// Send created film to client
		//res.json(result);
	//});
};

// Fetch all films
exports.findAll = (req, res) => {
	Film.findAll().then(films => {
		// Send all films to Client
		res.json(films);
	});
};

// Find a film by Id
exports.findById = (req, res) => {
	Film.findById(req.params.filmId).then(film => {
		res.json(film);
	})
};

exports.top3films = (req, res) => {
	let connection = mysql.createConnection(CONSTANS.MAIN_CONNECTION);

	let sql = CONSTANS.QUERYS.TOP_3_FILMS;

	connection.connect();

	connection.query(sql, true, (error, results, fields) => {
		  if (error) {
				connection.end();
		    return console.error(error.message);
		  }
		  console.log('Executing: '+sql);
			connection.end();
		  return res.json(results);
		});
};

exports.findByTitle = (req, res) => {

	let connection = mysql.createConnection(CONSTANS.MAIN_CONNECTION);

	let title = req.params.filmTitle;

	let sql = CONSTANS.PROCEDURES.GET_FILM_BY_NAME;

	sql = sql.replace('pi_title', title);

	connection.connect();

	//let sql = "call sys.get_film_by_title('"+req.params.filmTitle+"')";

	connection.query(sql, true, (error, results, fields) => {
		  if (error) {
				connection.end();
		    return console.error(error.message);
		  }
		  console.log('Executing: '+sql);
			connection.end();
		  return res.json(results[0]);
		});
};

// Update a film
exports.update = (req, res) => {
	let film = req.body;
	let id = req.body.id;
	Film.update(film,
		{
			where : {
				id : id
			}
		}
	).then(() => {
		res.status(200).json({
			msg : "updated successfully a film with id = " + id
		});
	});
};

// Delete a Customer by Id
exports.delete = (req, res) => {
	const id = req.params.filmId;
	Film.destroy({
		where : {
			id : id
		}
	}).then(() => {
		res.status(200).json({
			msg : 'deleted successfully a film with id = ' + id
		});
	});
};
