const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const User = db.collection("Users");
const Place = db.collection("Places");
const Post = db.collection("Posts");
const Interaction = db.collection("Interactions");
const Caption = db.collection("Captions");
const Comment = db.collection("Comments");

module.exports = { User, Place, Post, Interaction, Caption, Comment };
