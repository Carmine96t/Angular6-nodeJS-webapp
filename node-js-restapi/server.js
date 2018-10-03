var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

const db = require('./app/config/db.config.js');

// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync with { force: false }');
  //for overdrive data
  //initial();
});

require('./app/route/film.route.js')(app);

// Create a Server
var server = app.listen(8080, function () {

  let host = server.address().address
  let port = server.address().port

  console.log("App listening at http://%s:%s", host, port);
})

function initial(){

  let films = [
    {
      id: 1,
      title: "Avengers 4",
      rate: 0
    },
    {
      id: 2,
      title: "Capitan Marvel",
      rate: 0
    },
    {
      id: 3,
      title: "Capitan America",
      rate: 10
    },
    {
      id: 4,
      title: "Naruto - The Movie",
      rate: 6
    },
    {
      id: 5,
      title: "Harry Potter: Il Principe Mezzosangue",
      rate: 10
    },
    {
      id: 6,
      title: "Harry Potter: I Doni della Morte",
      rate: 5
    },
    {
      id: 7,
      title: "Harry Potter: I Doni della Morte pt.2",
      rate: 9
    }
  ]

  // Init data -> save to MySQL
  const Films = db.films;
  for (let i = 0; i < films.length; i++) {
    Films.create(films[i]);
  }
}
