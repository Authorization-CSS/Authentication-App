const router = require("express").Router();
const { User } = require("../db/user");

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
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
