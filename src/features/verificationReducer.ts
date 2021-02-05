import { ELIGIBILITY_VERIFICATION } from "./actionTypes";

const initialState: string = "";

type ActionType = {
  type: typeof ELIGIBILITY_VERIFICATION;
  payload: string;
};

export const verificationReducer = (
  state: string = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case ELIGIBILITY_VERIFICATION:
      return action.payload; // data.msg from server

    default:
      return state;
  }
};
