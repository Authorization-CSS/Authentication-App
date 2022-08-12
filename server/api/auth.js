const router = require("express").Router()
const User = require('../db/user')


router.post('/auth', async(req, res, next)=> {
    try {
        console.log('inside post route', req.body)
      res.send({ token: await User.authenticate(req.body)});
    }
    catch(ex){
      next(ex);
    }
  });
  
  router.get('/auth', async(req, res, next)=> {
    try {
      res.send(await User.byToken(req.headers.authorization));
    }
    catch(ex){
      next(ex);
    }
  });

  module.exports = router;