import React from "react";
import { useSelector } from "react-redux";
import Disqualify from "./Disqualify";
import LoanQualification from "./LoanQualification";
import SignUpform from "./SignUpform";
import { verificationStore } from "./../app/store";

const LoanForm: React.FC = () => {
  const message = useSelector((state: verificationStore) => state.message);
  return (
    <div className="loanForm">
      {(message === "" || message === "Bad request") && (
        <LoanQualification message={message} />
      )}
      {message === "qualified" && <SignUpform />}
      {message === "disqualified" && <Disqualify />}
    </div>
  );
};

export default LoanForm;
