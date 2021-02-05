import React from "react";
import AccountCreation from "./AccountCreation";

interface SignUpformProps {}

const SignUpform: React.FC<SignUpformProps> = ({}) => {
  const submitForm = () => {};
  return <AccountCreation submitForm={submitForm} />;
};

export default SignUpform;
