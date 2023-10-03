const { Interaction, Comment, Post } = require("../config/config");

function formatDate(date) {
  const result = new Date(
    date._seconds * 1000 + date._nanoseconds / 1000000
  ).toLocaleTimeString("id-ID", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  return result;
}

class InteractionController {
  static async createLike(req, res, next) {
    try {
      const user_id = req.user.id;
      const interaction_type = "like";
      const target_id = req.params.target_id;

      const like = await Interaction.add({
        user_id,
        interaction_type,
        target_id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      res
        .status(201)
        .json({ id: like.id, user_id, interaction_type, target_id });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async readLike(req, res, next) {
    try {
      const { target_id } = req.params;
      const likes = await Interaction.where("interaction_type", "==", "like")
        .where("target_id", "==", target_id)
        .get();

      let newLikes = [];

      likes.forEach((doc) => {
        const like = doc.data();
        like.id = doc.id;
        like.createdAt = formatDate(like.createdAt);
        like.updatedAt = formatDate(like.updatedAt);
        newLikes.push(like);
      });

      res.status(200).json(newLikes);
    } catch (error) {
      next(error);
    }
  }

  static async createFollow(req, res, next) {
    try {
      const user_id = req.user.id;
      const interaction_type = "follow";
      const target_id = req.params.target_id;

      const follow = await Interaction.add({
        user_id,
        interaction_type,
        target_id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      res
        .status(201)
        .json({ id: follow.id, user_id, interaction_type, target_id });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async readFollow(req, res, next) {
    try {
      const { target_id } = req.params;
      const follows = await Interaction.where(
        "interaction_type",
        "==",
        "follow"
      )
        .where("target_id", "==", target_id)
        .get();

      let newFollows = [];

      follows.forEach((doc) => {
        const follow = doc.data();
        follow.id = doc.id;
        follow.createdAt = formatDate(follow.createdAt);
        follow.updatedAt = formatDate(follow.updatedAt);
        newFollows.push(follow);
      });

      res.status(200).json(newFollows);
    } catch (error) {
      next(error);
    }
  }

  static async createComment(req, res, next) {
    try {
      const user_id = req.user.id;
      const { text } = req.body;
      const { post_id } = req.params;

      const newComment = await Comment.add({
        post_id: post_id,
        user_id: user_id,
        text: text,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      res.status(201).json({ id: newComment.id, text, post_id, user_id });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async readComment(req, res, next) {
    try {
      const { post_id } = req.params;
      const comments = await Comment.where("post_id", "==", post_id).get();

      let newComments = [];

      comments.forEach((doc) => {
        const comment = doc.data();
        comment.id = doc.id;
        comment.createdAt = formatDate(comment.createdAt);
        comment.updatedAt = formatDate(comment.updatedAt);
        newComments.push(comment);
      });

      res.status(200).json(newComments);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = InteractionController;
