const Sequelize = require("sequelize");
const db = require("./index");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 3;

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

User.beforeCreate(async function (user) {
  user.password = await bcrypt.hash(user.password, saltRounds,)
});


User.prototype.isCorrectPassword = async function(password){
  return await bcrypt.compare(password, this.password);
}


User.byToken = async function (token){
  try {
    const newToken = await jwt.verify(token, process.env.JWT);
    const user = await User.findByPk(newToken);
    if(user){
      return user;
    }
    const error = Error('bad credentials');
    error.status = 401;
    throw error;
  }
  catch(ex){
    const error = Error('bad credentials');
    error.status = 401;
    throw error;
  }
};

User.authenticate = async function(credentials) {
  const {email, password} = credentials;
  try{
    const user = await User.findOne({
    where: {
      email
    }
  });
  const isCorrect = await user.isCorrectPassword(password);
  if(!user){
    const error = Error("Incorrect email/password");
    error.status = 401;
    throw error;
    
  }
  if(user){
    if(isCorrect){
      const token = await jwt.sign(user.id, process.env.JWT);
    return token; 
    }
    
  }
  const error = Error('bad credentials');
  error.status = 401;
  throw error;

  }catch(err){
    console.log(err);
  }
  
};

module.exports = User;
