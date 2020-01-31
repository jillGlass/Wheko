const environment = process.env.NODE_ENV || "development";
const config = require("./knexfile")[environment];
const connection = require("knex")(config);

module.exports = {
  foundBird,
  getBirds,
  resetBirds,
  foundNumber
};

function getBirds(db = connection) {
  return db("birds");
}

function foundBird(id, db = connection) {
  return db("birds")
    .where("bird_id", id)
    .update({ found: true });
}

function foundNumber(id, db = connection) {
  console.log('db hit')
  return db("birds")
  .then(()=> console.log('db', id))
    .where("bird_id", id)
    .update({ number: 1 });
}

// function foundNumber(id, db = connection) {
//   return db("birds")
//     .where("bird_id", id)
//     .increment("number", 1);
// }

function resetBirds(db = connection) {
  return db("birds")
    .where("found", "=", true)
    .update({
      found: "0"
    });
}
