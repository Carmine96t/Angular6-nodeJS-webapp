module.exports = (sequelize, Sequelize) => {
	const film = sequelize.define('film', {
	  title: {
		type: Sequelize.STRING
	  },
	  rate: {
		  type: Sequelize.INTEGER
	  }
	});
	
	return film;
}