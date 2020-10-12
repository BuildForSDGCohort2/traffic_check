const mongoose = require("mongoose");
const Post = mongoose.model("Post");

async function getPosts(req, res) {
    let posts = []
  const foundPosts = await Post.find()
    .populate("postedBy", "_id name")
    .populate("comments.postedBy", "_id name")
    .sort("-createdAt");
  console.log( foundPosts );
  try {
     res.status(200).json({foundPosts})
  } catch (error) {
    res.status(200).json({error: "Something went wrong"})
  }
  
}
module.exports = { getPosts };
