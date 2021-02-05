import { COLLECT_SIGNUP_FORM } from "./actionTypes";

const initialState = {
  email: "",
  password: "",
};

interface AccountState {
  email: string;
  password: string;
}
type ActionType = {
  type: typeof COLLECT_SIGNUP_FORM;
  payload: string;
};
export const userReducer = (
  state: AccountState = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case COLLECT_SIGNUP_FORM:
      return action.payload;

    default:
      return state;
  }
};
