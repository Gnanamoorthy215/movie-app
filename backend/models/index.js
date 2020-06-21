const Sequelize = require('sequelize');

const sequelize = new Sequelize('movies', 'root', 'Gn@n@m00rthy', {
    host: 'localhost',
    dialect: 'mysql' ,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
});


const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.films = require("./films.models")(sequelize,Sequelize);
db.actors = require("./actors.model")(sequelize,Sequelize);
db.producers = require("./producers.model")(sequelize,Sequelize);

db.films.hasOne(db.producers , {as : "producer"});

db.actors.belongsToMany(db.films, {
    through: "actor_films",
    as: "actors",
    foreignKey: "actor_id",
});

db.films.belongsToMany(db.actors, {
    through: "actor_films",
    as: "film",
    foreignKey: "film_id",
});

db.producers.belongsToMany(db.films,{
    through:"produced_films",
    as:"producer",
    foreignKey:"producer_id"

});

module.exports=db;