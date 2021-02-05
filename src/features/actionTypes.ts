export const LOADING = "LOADING";
export const ELIGIBILITY_VERIFICATION = "ELIGIBILITY_VERIFICATION";
export const COLLECT_SIGNUP_FORM = "COLLECT_SIGNUP_FORM";
export const API_REQUEST_FALIED = "API_REQUEST_FALIED";

export type signupType = {
  email: string;
  password: string;
};
export interface loadingDispatchType {
  type: typeof LOADING;
}

export interface eligibilityDispatchType {
  type: typeof ELIGIBILITY_VERIFICATION;
  payload: string;
}

export interface signUpDispatchType {
  type: typeof COLLECT_SIGNUP_FORM;
  payload: signupType;
}
export interface errorDispatchType {
  type: typeof API_REQUEST_FALIED;
  payload: string;
}
export type dispatchTypes =
  | loadingDispatchType
  | eligibilityDispatchType
  | signUpDispatchType
  | errorDispatchType;
