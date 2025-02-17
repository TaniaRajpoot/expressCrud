import express from "express";
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();



const users = [
  {
  "firstname": "john",
  "lastname": "david",
  "age": 25
},
 {
  "firstname": "john",
  "lastname": "david",
  "age": 25
}
];

// all routes here start with /users
router.get("/", (req, res) => {
  console.log(users);

  // res.send('Hello');
  // res.status(200).json({
  //   status: true,
  //   users,
  // });
  res.send(users);
});

// let users = [];

router.post('/', (req, res) => {
  const user = req.body;
console.log("testing", user);
  if (!user.firstname) {
    return res.status(400).send("Firstname is required");
  }

  const newUser = { ...user, id: uuidv4() };
  users.push(newUser);

  res.send(`User with the name ${user.firstname} added to the database`);
});


export default router;
