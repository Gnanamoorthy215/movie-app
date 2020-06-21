const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());


const db = require("./models");
const filmModel = require("./models/films.models");
const FilmController = require("./controllers/films.controller");
const ActorController =require("./controllers/actors.controller");

const movieRoutes = express.Router();

const run = async () =>{

};

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    run(
        FilmController.create({
            title:"Once Upon a time in Hollywood",
            plot:"N/A",
            released:2019,
            runtime:" 192 mins"
        })
    );
});

movieRoutes.route('/add').post(function(req, res) {
    let film = req.body;
    FilmController.create( film)
});

app.use('/movies',movieRoutes);


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});