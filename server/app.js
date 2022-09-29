import express from "express";
export const app = express();
import cors from "cors";
// const { getAllMissions, getMissionById } = require("./server/controllers");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the server!");
});

// app.get("/missions", (req, res) => {
//   getAllMissions()
//     .then((data) => res.send(data))
//     .catch((err) =>
//       res
//         .status(404)
//         .json({ message: "No missions found matching this search!" })
//     );
// });

// app.get("/missions/:id", (req, res) => {
//   let { id } = req.params;
//   getMissionById(id)
//     .then((data) => res.send(data))
//     .catch((err) =>
//       res
//         .status(404)
//         .json({ message: "No mission found matching this search!" })
//     );
// });
