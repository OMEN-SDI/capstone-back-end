import { myKnex } from "./dbConnection.js";

export function getAllMissions() {
  return myKnex.select("*").from("mission");
}

export function getAllUsers() {
  return myKnex.select("*").from("user_table");
}

export function getAllMissionTypes() {
  return myKnex.select("*").from("mission_type");
}

export function getAllFavoriteMissionsByUser(id) {
  return myKnex("favorite_mission").where("user_id", "=", `${id}`);
}

export function getUser(user) {
  return myKnex("user_table").where("username", "=", `${user.id}`);
}

export function postNewMission(newMission) {
  return myKnex("mission").insert(newMission);
}

export function postNewUser(newUser) {
  return myKnex("user_table").insert(newUser);
}

export function postLoggedInUser(user) {
  return myKnex("user_table").where("id", "=", `${user.id}`)
}

export function postNewFavoriteMission(NewFavoriteMission) {
  return myKnex("favorite_mission").insert(NewFavoriteMission);
}

export function patchExistingMission(mission) {
  return myKnex("mission")
    .where("msn_id", "=", `${mission.id}`)
    .update(mission.body);
}

export function patchExistingUser(user) {
  return myKnex("user_table").where("id", "=", `${user.id}`).update(user.body);
}

export function deleteUser(userId) {
  return myKnex("user_table").where({ id: userId }).del();
}

export function deleteFavoriteMission(favoriteId) {
  return myKnex("favorite_mission").where({ favorite_id: favoriteId }).del();
}

// export default getAllMissions;

// ENDPOINTS:
// GET
// /missions - shows all missions
// /users - shows all users
// /missiontype -shows all available mission types
// /favoritemissions/:userid - should show favorite missions the user has saved

// POST
// /missions - creates a mission
// /users - creates a user
// /favoritemissions - creates a favorite mission

// PATCH
// /missions/:id - updates a mission
// /users/:id - updates a user

// DELETE
// /users/:id - deletes a user
// /favoritemissions/:missionid - should be able to delete a favorite mission
