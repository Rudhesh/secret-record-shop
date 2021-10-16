import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  password: String,
  playlists: [{ type: mongoose.Schema.Types.ObjectId, ref: "test-playlists" }],
});

const User = mongoose.model("test-userOne", userSchema);

export default User;
