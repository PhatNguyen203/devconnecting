import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/constants";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  user: null,
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.token);
      return {
        ...state,
        ...payload,
        loading: false,
        isAuthenticated: true,
      };
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        ...payload,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
}
