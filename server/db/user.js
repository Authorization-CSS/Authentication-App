const Sequelize = require("sequelize");
const db = require("./index");

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

User.byToken = async(token)=> {
  try {
    const user = await User.findByPk(token);
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

User.authenticate = async(credentials)=> {
  console.log("inside authenticate", credentials);
  const {email, password} = credentials;
  try{
    console.log("email and password", email, password)
    const user = await User.findOne({
    where: {
      email,
      password
    }
  });
  console.log("USER:", user);
  if(user){
    return user.id; 
  }
  const error = Error('bad credentials');
  error.status = 401;
  throw error;

  }catch(err){
    console.log(err);
  }
  
};

module.exports = User;
