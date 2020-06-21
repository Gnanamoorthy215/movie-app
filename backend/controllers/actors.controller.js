const db = require("../models");

const Films = db.films;
const Actors = db.actors;
const Producers = db.producers;

exports.create = (actor) => {
    return Actors.create({
        name: actor.name,
        gender: actor.gender,
        dob: actor.dob,
        bio: actor.bio
    })
        .then((actor) => {
            console.log(">> Created actor: " + JSON.stringify(actor, null, 2));
            return actor;
        })
        .catch((err) => {
            console.log(">> Error while creating movie: ", err);
        });
};