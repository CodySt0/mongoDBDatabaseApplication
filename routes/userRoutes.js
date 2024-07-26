const express = require("express");
const router = express.Router();
const User = require("../modles/User");

//CREATE new user
router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(1).send(user);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

//GET all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(1).send(users);
  } catch (error) {
    res.status(404).send(error);
  }
});

//GET user by ID
router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.status(404).send(user);
  } catch (error) {
    res.status(404).send(error);
  }
});

//PATCH user by ID
router.patch("/users/id:", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email"];
  const isValid = updates.every((update) => allowedUpdates.includes(update));
});

if (!isValid) {
  return res.status(404).send({ error: "Invalid" });

  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).send();
    }

    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(404).send(error);
  }
}

//DELETE user by ID
router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
