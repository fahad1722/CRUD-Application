import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phone: String,
  company: String,
  designation: String,
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, "users");

const user = mongoose.model("users", userSchema);

export default user;
