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
import cookieParser from "cookie-parser";

export const app = express();

// useful for local running
// app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(
  cors({ credentials: true, origin: "https://omen-front-end.herokuapp.com" })
);

// app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
const sessionOptions = {
  secret: "thisisatestsecret",
  saveUninitialized: false,
  resave: false,
};
// app.use(session({ secret: 'Keep it secret', name: 'uniqueSessionID', saveUninitialized: false, resave: false }))
app.use(session(sessionOptions));

// const requireLogin = (req, res, next) => {
//   if(!req.session.loggedIn){
//       return res.redirect('/login');
//   }
//   next();
// }

//**TESTING ROUTE */
//*************************************************** */
// app.get('/test', (req, res) => {
//   if (req.session.loggedIn)
//     res.redirect('/userpage')
//   else
//     res.sendFile('index.html', { root: path.join(__dirname, '/public') })
// })

// app.get('/userpageTest', (req, res) => {
//   if (req.session.loggedIn) {
//     res.setHeader('Content-Type', 'text/html')
//     res.write(`Welcome ${req.session.username} to your dashboard`)
//     // res.write('<a href="/logout">Logout</a>')
//     res.end()
//   }
//   else
//     res.redirect('/login')
// })

app.get("/ianstest", (req, res) => {});
//*************************************************** */
//**TESTING ROUTE */

app.get("/countview", (req, res) => {
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }
  res.send(`You have viewed this page ${req.session.count} times`);
});

app.get("/registerTwo", (req, res) => {
  const { username = "Billy" } = req.query;
  req.session.username = username;
  res.redirect("/greet");
});

app.get("/greet", (req, res) => {
  // const { username } = req.session;
  res.send(`Welcome back`);
});

app.get("/", (req, res) => {
  res.send("Welcome to the server!");

  //this test was causing an error so i took it out -ian
  // res.redirect("/greet");
});

app.post("/register", async (req, res) => {
  const { first_name, last_name, password, username, email } = req.body;
  const hash = await bcrypt.hash(password, 12);
  const user = {
    first_name,
    last_name,
    username,
    password: hash,
    email,
  };
  postNewUser(user)
    .then((data) => res.status(201).send({ message: "User Created!" }))
    .catch((err) =>
      res.status(404).json({ message: "Could not create user!" })
    );
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
    .catch((err) => res.status(404).json({ message: err }));
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

app.post("/register", async (req, res) => {
  const { first_name, last_name, password, username, email } = req.body;
  const hash = await bcrypt.hash(password, 12);
  const user = {
    first_name,
    last_name,
    username,
    password: hash,
    email,
  };
  postNewUser(user)
    .then((data) => res.status(201).send({ message: "User Created!" }))
    .catch((err) =>
      res.status(404).json({ message: "Could not create user!" })
    );
});

app.post("/login", async (req, res) => {
  var opts = {
    maxAge: 900000,

    // troubleshooting heroku
    sameSite: "none",
    secure: true,

    // httpOnly: true,
    domain: "https://omen-database.herokuapp.com/",
    // httpOnly: true,
    // secure: true,
  };

  const { username, password } = req.body;
  // find user in user table
  const user = (await getAllUsers()).find((user) => user.username === username);
  // check if username is valid
  if (!user) return res.status(403).json({ message: "bad login" });
  // compare hashed password and set to variable 'match'
  const match = await bcrypt.compare(password, user.password);
  // check if there's a matching password
  if (!match) return res.status(403).json({ message: "bad login" });
  res.cookie("userCredentials", {}, opts);
  res.cookie("isLoggedIn", true, opts);
  res.json({ success: true, user }).end();
  // res.cookie("mark", "bo", opts);
  // res.end();
});

// app.post("/login", async (req, res) => {
//   const { username, password } = req.body;
//   const user = (await getAllUsers()).find(user => user.username === username);
// if(user) {
//   req.session.username = user.username;
// } else {
//   res.redirect('/login');
// }
//   if (!user) return res.status(403).json({ message: 'bad login' });
//   const match = await bcrypt.compare(password, user.password);
//   if (!match) return res.status(403).json({ message: 'bad login' });
//   res.status(200).json({ success: true, user });
// })

app.post("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        res.status(400).send("Unable to log out");
      } else {
        res.redirect("/login");
      }
    });
  } else {
    res.end();
  }
});

app.post("/favoritemissions", (req, res) => {
  const favoriteMission = req.body;
  postNewFavoriteMission(favoriteMission)
    .then(() => {
      getAllFavoriteMissionsByUser(favoriteMission.user_id)
        .then((data) => res.status(200).send(data))
        .catch((err) =>
          res.status(404).json({
            message: err + "No favorite missions found matching this search!",
          })
        );
    })
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

app.delete("/favoritemissions", (req, res) => {
  const { favorite_id, user_id } = req.body;
  deleteFavoriteMission(favorite_id).then(() => {
    getAllFavoriteMissionsByUser(user_id)
      .then((data) => res.status(200).send(data))
      .catch((err) =>
        res.status(404).json({
          message: "No favorite missions found matching this search!",
        })
      );
  });
  // .catch((err) =>
  //   res
  //     .status(404)
  //     .json({ message: "Could not remove mission from favorites!" })
  // );
});

app.delete("/missions/:id", (req, res) => {
  const { id } = req.params;

  deleteMission(id)
    .then((data) =>
      res.status(202).send({ message: "Mission removed from missions!" })
    )
    .catch((err) =>
      res.status(404).json({
        message: "Could not remove mission from missions!",
        error: err,
      })
    );
});
