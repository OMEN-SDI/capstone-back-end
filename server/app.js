import express from "express";
import cors from "cors";
import bcrypt, { hash } from "bcrypt";
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
  deleteMission,
  deleteFavoriteMission,
  postLoggedInUser,
  getUser,
} from "./controllers.js";
import session from "express-session";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'thisisatestsecret', saveUninitialized: false, resave: false }));

const requireLogin = (req, res, next) => {
  if(!req.session.username){
      return res.redirect('/login');
  }
  next();
}

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the server!");
});

app.get("/register", (req, res) => {
  res.render('register');
})

app.post("/register", async (req, res) => {
  const { first_name, last_name, password, username, email } = req.body;
  const hash = await bcrypt.hash(password, 12);
  const user = ({
    first_name,
    last_name,
    username,
    password: hash,
    email
  })
  postNewUser(user)
    .then((data) => res.status(201).send({ message: "User Created!" }))
    .catch((err) =>
      res.status(404).json({ message: "Could not create user!" })
    );
  // res.redirect('/userpage');
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


app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  // find user in user table
  const user = (await getAllUsers()).find(user => user.username === username);
  // check if username is valid
  if( !user ) return res.status(403).json({ message: 'bad login'});
  // compare hashed password and set to variable 'match'
  const match = await bcrypt.compare(password, user.password);
  // check if there's a matching password 
  if (!match) return res.status(403).json({ message: 'bad login' });
  res.status(200).json({ success: true, user });  
})

app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    res.redirect('/') 
  })
})

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

app.delete("/missions/:id", (req, res) => {
  const { id } = req.params;

  deleteMission(id)
    .then((data) =>
      res.status(202).send({ message: "Mission removed from missions!" })
    )
    .catch((err) =>
      res
        .status(404)
        .json({ message: "Could not remove mission from missions!" })
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
