const mongoose = require("mongoose");
const express = require("express");
const app = express();
const axios = require("axios");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
var corsOptions = {
  origin: "http://localhost:3000",
};

require("dotenv").config();

const user = require("./models/user");
const User = require("./models/user");

const jwt = require("jsonwebtoken");

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

signinRouter.use(function (req, res, next) {
  console.log("Received sign in request");
  res.json("Welcome to Sign In");
  next();
});

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

// Starting server
const port = 3000;
app.listen(port, () => {
  console.log(`App is running at ${port}`);
});

// Modèle de données Mongoose pour les films
const movieSchema = new mongoose.Schema({
  title: String,
  overview: String,
  release_date: Date,
  poster_path: String,
  vote_average: Number,
});

const Movie = mongoose.model("Movie", movieSchema);

// Récupération des 1000 films les plus populaires à partir de l'API TMDb et enregistrement dans MongoDB
const api_key = "d37d3e4ad93eaefbc2c174c17d90eb9d";
let page = 1;
const max_page = 10;

const saveMovies = () => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${page}`
    )
    .then((response) => {
      const movies = response.data.results;

      movies.forEach((movie) => {
        const newMovie = new Movie({
          title: movie.title,
          overview: movie.overview,
          release_date: movie.release_date,
          poster_path: movie.poster_path,
          vote_average: movie.vote_average,
        });

        newMovie
          .save()
          .then(() => console.log("Movie saved"))
          .catch((err) => console.log(err));
      });

      if (page < max_page) {
        page++;
        saveMovies();
      }
    })
    .catch(console.error);
};

saveMovies();
