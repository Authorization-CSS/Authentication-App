const router = require("express").Router();
const User  = require("../db/user");

router.put("/signup", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOrCreate({
      where: {
        name,
        email,
        password,
      },
    });
    res.send(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
