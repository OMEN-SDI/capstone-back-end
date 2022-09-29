const knex = require("./dbConnection");

function getAllMissions() {
  return knex.select("*").from("mission");
}
function getMissionById(id) {
  return knex("mission").where({ id }).select();
}

module.exports = { getAllMissions, getMissionById };
