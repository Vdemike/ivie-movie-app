const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.set("view engine", "ejs");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
var corsOptions = {
  origin: "http://localhost:5173",
};

require("dotenv").config();

const jwt = require("jsonwebtoken");
const User = require("./models/user");
const movieRoutes = require("./routes/movies");
const saveMovies = require("./tmdb");

//DB connection
mongoose.connect(
  `mongodb+srv://ivie:Becode@cluster0.rayo4nz.mongodb.net/Users?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.set("strictQuery", true);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("DB Connected successfully");
  saveMovies(1); // Enregistrement des films au démarrage du serveur
});

// Starting server
const port = 3000;
app.listen(port, () => {
  console.log(`App is running at ${port}`);
});

// Use parsing middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));

// routes import
const userRoutes = require("./routes/user");
const signinRouter = express.Router();
const signoutRouter = express.Router();

// using routes
app.use("/api", userRoutes); // = localhost:3000/api/signup
app.use("/signin", signinRouter);
app.use("/signout", signoutRouter);
app.use("/movies", movieRoutes);

signinRouter.post("/", (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "Email was not found",
      });
    }

    //Authenticate user
    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: "Email and password do not match",
      });
    }

    //Create token
    const token = jwt.sign({ _id: user._id }, process.env.SECRET);

    //Put token in cookie
    res.cookie("token", token, { expire: new Date() + 1 });

    console.log("User logged in");
    //Send response to front end
    const { _id, name, email } = user;
    return res.json({
      token,
      user: {
        _id,
        name,
        email,
      },
    });
  });
});

signoutRouter.get("/", (req, res, next) => {
  res.clearCookie("token");
  return res.json({ message: "User signed out successfully" });
});

// Récuperer les infos des users enregistrés
app.get('/users', (req, res) => {
  User.find((err, users) => {
    if (err) {
      console.log('Error getting users from MongoDB', err);
      res.status(500).send('Error getting users from MongoDB');
    } else {
      res.status(200).send(users);
    }
  });
});
