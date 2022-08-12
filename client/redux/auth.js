import axios from "axios";

const LOGIN_USER = "LOGIN_USER";
const CREATE_USER = "CREATE_USER";

const loginUser = (user) => ({
  type: LOGIN_USER,
  user,
});

const createUser = (user) => ({
  type: CREATE_USER,
  user,
});

export const loginThunk = (user) => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/login", user);
    dispatch(loginUser(data));
  } catch (error) {
    console.log(error);
  }
};

export const siGnupThunk = (user) => async (dispatch) => {
  try {
    const { data } = await axios.put("/api/signup", user);
    dispatch(createUser(data));
  } catch (error) {
    console.log(error);
  }
};

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.user;
    case CREATE_USER:
      return action.user;
    default:
      return state;
  }
};

export default authReducer;
