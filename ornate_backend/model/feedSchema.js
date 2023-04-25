const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;

const feedSchema = new Schema({
  feedmail: {
    type: String,
    required: true,
  },
  feed: {
    type: String,
    required: true,
  },
});

feedSchema.statics.feed = async function (feedmail, feed) {
  if (!feedmail || !feed) {
    throw Error("All feilds must be filled");
  }
  if (!validator.isEmail(feedmail)) {
    throw Error("Email not valid.");
  }

  const feedback = await this.create({
    feedmail,
    feed,
  });

  return feedback;
};
