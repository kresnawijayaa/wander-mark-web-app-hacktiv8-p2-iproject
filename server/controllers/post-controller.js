const { Post } = require("../config/config");
const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_APIKEY,
});

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

class PostController {
  static async create(req, res, next) {
    try {
      const user_id = req.user.id;
      const {
        title,
        image_url,
        place_name,
        place_address,
        place_opening_hours,
        place_url,
        place_photos,
        caption,
      } = req.body;

      const post = await Post.add({
        user_id,
        title,
        image_url,
        place_name,
        place_address,
        place_opening_hours,
        place_url,
        place_photos,
        caption,
        comments: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      res.status(201).json({ id: post.id, title });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async read(req, res, next) {
    try {
      const posts = await Post.orderBy("createdAt", "desc").get();

      let newPosts = [];

      posts.forEach((doc) => {
        const post = doc.data();
        post.id = doc.id;
        console.log(post);
        // post.createdAt = post.createdAt.toDate();
        post.createdAt = formatDate(post.createdAt);
        post.updatedAt = formatDate(post.updatedAt);
        newPosts.push(post);
      });

      res.status(201).json(newPosts);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async generateCaption(req, res, next) {
    console.log(process.env.OPENAI_APIKEY);
    try {
      const { prompt } = req.body;
      const newPrompt =
        prompt +
        ", cukup caption-nya aja tanpa petik dua atau tanda kutip 2 atau tanda kutip.";
      console.log(newPrompt);
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: `Kamu akan bertindak sebagai content creator, dimana perlu membuat caption yang lucu lucu, unik dan menarik.
            berikan response dalam bentuk string aja, tanpa karakter spesial selain koma dan titik, boleh juga menggunakan emoji.
          `,
          },
          { role: "user", content: newPrompt },
        ],
        model: "gpt-3.5-turbo",
      });

      res.status(201).json(completion.choices[0].message.content);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PostController;
