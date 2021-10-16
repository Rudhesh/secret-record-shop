import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: Number,
  title: String,
  artist: String,
  format: String,
  genre: String,
  img_src: String,
  src: String,
  type: String,
  price: String,
  count: Number,
  role: { type: String, default: "user" },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "test-userOne",
  },
});

const Playlist = mongoose.model("test-playlists", playlistSchema);

export default Playlist;
