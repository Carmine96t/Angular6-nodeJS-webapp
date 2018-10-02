exports.MAIN_CONNECTION = {
	host : 'localhost',
	user : 'root',
	password : 'root',
	database : 'sys'
};

exports.QUERYS = {
    TOP_3_FILMS : "SELECT `id`, `title`, `rate`, `createdAt`, `updatedAt` FROM films WHERE RATE >= 8; "
}

exports.PROCEDURES = {
    GET_FILM_BY_NAME : "call sys.get_film_by_title('[input01]')"
}

exports.MAIN_CONNECTION = {
    host : 'localhost',
	user : 'root',
	password : 'root',
	database : 'sys'
};

