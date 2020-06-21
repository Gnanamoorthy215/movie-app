const db = require("../models");

const Films = db.films;
const Actors = db.actors;
const Producers = db.producers;

exports.create = (film) => {
    return Films.create({
        title: film.title,
        plot: film.plot,
        released: film.released,
        runtime: film.runtime
    })
        .then((film) => {
            console.log(">> Created movie: " + JSON.stringify(film, null, 2));
            return film;
        })
        .catch((err) => {
            console.log(">> Error while creating movie: ", err);
        });
};

exports.findAll = () => {
    return Films.findAll({
      include: [
        {
          model: Actors,
          as: "actors",
          attributes: ["id", "name"],
          through: {
            attributes: [],
          },
          
        },
      ],
    })
      .then((Films) => {
        return Films;
      })
      .catch((err) => {
        console.log(">> Error while retrieving Films: ", err);
      });
  };