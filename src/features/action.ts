import axios from "axios";
import { Dispatch } from "redux";
import {
  dispatchTypes,
  LOADING,
  ELIGIBILITY_VERIFICATION,
  COLLECT_SIGNUP_FORM,
  API_REQUEST_FALIED,
} from "./actionTypes";

interface FormDataState {
  autoPrice: number;
  autoMake: string;
  autoModel: string;
  userYearlyIncome: number;
  userCreditScore: number;
}
interface FormDataState {
  autoPrice: number;
  autoMake: string;
  autoModel: string;
  userYearlyIncome: number;
  userCreditScore: number;
}
interface signUpDataState {
  email: string;
  password: string;
}
export const checkEligibility = (formData: FormDataState) => async (
  dispatch: Dispatch<dispatchTypes>
) => {
  // LOADING (BEFORE FETCH)
  dispatch({
    type: LOADING,
  });

  try {
    const response = await axios.post(
      "http://localhost:3002/getDetails",
      formData
    );
    console.log(response);

    // RESPONSE FROM SERVER API
    dispatch({
      type: ELIGIBILITY_VERIFICATION,
      payload: response.data.msg,
    });
  } catch (error) {
    console.log(error);
    // SERVER ERROR
    dispatch({
      type: API_REQUEST_FALIED,
      payload: "error : " + error,
    });
  }
};

export const signUp = (formData: signUpDataState) => {
  return {
    type: COLLECT_SIGNUP_FORM,
    payload: formData,
  };
};
