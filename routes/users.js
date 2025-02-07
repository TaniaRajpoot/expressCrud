import express from "express";

const router = express.Router();



const users = [
  {
  "firstname": "john",
  "lastname": "david",
  "age": 25
}
]


// all routes here start with /users
router.get('/' , (req,res) => {
console.log(users);

    res.send('Hello');
});

router.post('/' , (req,res) => {

});


export default router;
