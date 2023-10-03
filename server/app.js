if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

const UserController = require("./controllers/user-controller");
const PostController = require("./controllers/post-controller");
const InteractionController = require("./controllers/interaction-controller");
const authentication = require("./middlewares/authentication");
const errorHandler = require("./middlewares/errorHandler");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/signup", UserController.signup);
app.post("/login", UserController.login);
// app.post("/github-login", UserController.githubLogin);
app.use(authentication);

app.get("/posts", PostController.read);
app.post("/posts", PostController.create);
app.post("/caption", PostController.generateCaption);

app.get("/like/:target_id", InteractionController.readLike);
app.post("/like/:target_id", InteractionController.createLike);

app.get("/follow/:target_id", InteractionController.readFollow);
app.post("/follow/:target_id", InteractionController.createFollow);

app.get("/comment/:post_id", InteractionController.readComment);
app.post("/comment/:post_id", InteractionController.createComment);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
