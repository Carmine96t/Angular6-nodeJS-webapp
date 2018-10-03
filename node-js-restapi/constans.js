exports.MAIN_CONNECTION = {
	host : 'localhost',
	user : 'root',
	password : 'root',
	database : 'sys'
};

exports.INSERT = {
	FILM: "INSERT INTO FILMS (title, rate, createdAt, updatedAt) VALUE ('pi_title', 0, sysdate(), sysdate());"
}

exports.QUERYS = {
    TOP_3_FILMS : "SELECT `id`, `title`, `rate`, `createdAt`, `updatedAt` FROM films WHERE RATE >= 8; "
}

exports.PROCEDURES = {
    GET_FILM_BY_NAME : "call sys.get_film_by_title('pi_title')"
}

exports.MAIN_CONNECTION = {
    host : 'localhost',
	user : 'root',
	password : 'root',
	database : 'sys'
};
