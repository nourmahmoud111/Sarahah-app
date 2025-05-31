import mongoose from "mongoose";

export const dbconn = mongoose.connect("mongodb+srv://aldennour741:FBYzHnFTVJP2dPcC@cluster0.bhllnte.mongodb.net/MvcSarahahapp?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log(`db connected successfully`);
}).catch((err) => {
    console.log(`db connection fail`, err);
});
