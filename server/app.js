import express from "express";
import cors from "cors";
import {
  getAllMissions,
  getAllUsers,
  getAllMissionTypes,
  getAllFavoriteMissionsByUser,
  postNewMission,
  postNewUser,
  postNewFavoriteMission,
  patchExistingMission,
  patchExistingUser,
  deleteUser,
  deleteFavoriteMission,
} from "./controllers.js";

export const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the server!");
});

app.get("/missions", (req, res) => {
  getAllMissions()
    .then((data) => res.status(200).send(data))
    .catch((err) =>
      res
        .status(404)
        .json({ message: "No missions found matching this search!" })
    );
});

app.get("/users", (req, res) => {
  getAllUsers()
    .then((data) => res.status(200).send(data))
    .catch((err) =>
      res.status(404).json({ message: "No users found matching this search!" })
    );
});

app.get("/missiontypes", (req, res) => {
  getAllMissionTypes()
    .then((data) => res.status(200).send(data))
    .catch((err) =>
      res
        .status(404)
        .json({ message: "No mission types found matching this search!" })
    );
});

app.get("/favoritemissions/:id", (req, res) => {
  let { id } = req.params;
  getAllFavoriteMissionsByUser(id)
    .then((data) => res.status(200).send(data))
    .catch((err) =>
      res
        .status(404)
        .json({ message: "No favorite missions found matching this search!" })
    );
});

app.post("/missions", (req, res) => {
  const mission = req.body;
  postNewMission(mission)
    .then((data) => res.status(201).send({ message: "Created mission!" }))
    .catch((err) =>
      res.status(404).json({ message: "Could not add mission!" })
    );
});

app.post("/users", (req, res) => {
  const user = req.body;
  postNewUser(user)
    .then((data) => res.status(201).send({ message: "User Created!" }))
    .catch((err) =>
      res.status(404).json({ message: "Could not create user!" })
    );
});

app.post("/favoritemissions", (req, res) => {
  const favoriteMission = req.body;
  postNewFavoriteMission(favoriteMission)
    .then((data) =>
      res.status(201).send({ message: "Mission added to favorites!" })
    )
    .catch((err) =>
      res.status(404).json({ message: "Could not add mission to favorites!" })
    );
});

app.patch("/missions/:id", (req, res) => {
  const mission = { id: req.params.id, body: req.body };

  patchExistingMission(mission)
    .then((data) => res.status(200).send({ message: "Mission Updated!" }))
    .catch((err) =>
      res.status(404).json({ message: "Could not update mission!" })
    );
});

app.patch("/users/:id", (req, res) => {
  const user = { id: req.params.id, body: req.body };

  patchExistingUser(user)
    .then((data) => res.status(200).send({ message: "User Updated!" }))
    .catch((err) =>
      res.status(404).json({ message: "Could not update user!" })
    );
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  deleteUser(id)
    .then((data) => res.status(202).send({ message: "User deleted!" }))
    .catch((err) =>
      res.status(404).json({ message: "Could not delete user!" })
    );
});

app.delete("/favoritemissions/:id", (req, res) => {
  const { id } = req.params;

  deleteFavoriteMission(id)
    .then((data) =>
      res.status(202).send({ message: "Mission removed from favorites!" })
    )
    .catch((err) =>
      res
        .status(404)
        .json({ message: "Could not remove mission from favorites!" })
    );
});
