import express from "express";
const router = express.Router();
import path from "path";
import { fileURLToPath } from "url";
import { promises as fs } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let users = JSON.parse(
  await fs.readFile(path.join(__dirname, "..", "db", "usersDb.json"), "utf-8")
);

const usersDb = {
  users,
  setUsers: function (data) {
    this.users = data;
  },
};

router
  .route("/")
  .get(async (req, res) => {
    const latestUser = usersDb.users[usersDb.users.length - 1];
    console.log(latestUser);
    res.send(latestUser);
  })
  .post(async (req, res) => {
    try {
      const { firstName, lastName, dob } = req.body;
      const newUser = { firstName, lastName, dob };
      usersDb.setUsers([...usersDb.users, newUser]);
      console.log(usersDb);
      await fs.writeFile(
        path.join(__dirname, "..", "db", "usersDb.json"),
        JSON.stringify(usersDb.users)
      );
      res.send({ message: "User Added!" });
    } catch (error) {
      console.log("error: ", error);
      res.send({ error });
    }
  });

export default router;
