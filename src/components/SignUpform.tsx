import React, { useState } from "react";
import AccountCreation from "./AccountCreation";
import FormSuccess from "./FormSuccess";

const SignUpform: React.FC = () => {
  const submitForm = () => {
    setIsSubmitted(true);
  };
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  return (
    <div className="signupForm">
      {!isSubmitted ? (
        <AccountCreation submitForm={submitForm} />
      ) : (
        <FormSuccess />
      )}
    </div>
  );
};

export default SignUpform;
