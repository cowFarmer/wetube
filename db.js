import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}
);

const db = mongoose.connection;

const hanleOpen = () => console.log("✅  Connected to DB")
const hanleError = () => console.log(`❌  Error on DB Connection:${error}`)

db.once("open", hanleOpen);
db.on("error", hanleError);