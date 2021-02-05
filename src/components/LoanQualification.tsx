import React, { useState } from "react";
import "./LoanQualification.css";
import Marketing from "./Marketing";
import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";
import { checkEligibility } from "./../features/action";

interface LoanQualificationProps {
  message: string;
}
interface FormFieldState {
  autoPrice: string;
  autoMake: string;
  autoModel: string;
  userYearlyIncome: string;
  userCreditScore: number;
}
const LoanQualification: React.FC<LoanQualificationProps> = ({ message }) => {
  const [formField, setFormField] = useState<FormFieldState>({
    autoPrice: "",
    autoMake: "",
    autoModel: "",
    userYearlyIncome: "",
    userCreditScore: 0,
  });
  const [isApplyClicked, setIsApplyClicked] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsApplyClicked(true);
    let newAutoprice = Number(
      formField.autoPrice.replace(/,/g, "").substring(1)
    );
    let newIncome = Number(
      formField.userYearlyIncome.replace(/,/g, "").substring(1)
    );
    if (
      formField.userYearlyIncome.trim().length === 0 ||
      newAutoprice === 0 ||
      formField.autoPrice.trim().length === 0 ||
      formField.autoMake.trim().length === 0 ||
      formField.autoModel.trim().length === 0 ||
      formField.userYearlyIncome.trim().length === 0 ||
      newIncome === 0 ||
      formField.userCreditScore === 0 ||
      formField.userCreditScore < 300 ||
      formField.userCreditScore > 850
    ) {
      return false;
    }

    dispatch(
      checkEligibility({
        autoPrice: newAutoprice,
        autoMake: formField.autoMake,
        autoModel: formField.autoModel,
        userYearlyIncome: newIncome,
        userCreditScore: formField.userCreditScore,
      })
    );
  };
  const updateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value }: any = e.target;
    setFormField({
      ...formField,
      [name]: value,
    });
  };
  return (
    <div>
      <h1 className="loanQualification__heading">Auto Loan Application</h1>
      <div className="loanQualification">
        <div className="loanQualification__division">
          <h2 className="loanQualification__form-heading ">
            Check Auto-loan Eligibility
          </h2>
          <form
            onSubmit={handleSubmit}
            className="loanQualification__form"
            noValidate
          >
            {message !== "" && (
              <p className="loanQualification__error">
                {message} due to due to higher Auto Purchase Rate!
              </p>
            )}
            <div className="loanQualification__div">
              <label className="loanQualification__label">
                Auto Purchase Price
              </label>
              <NumberFormat
                value={formField.autoPrice}
                name="autoPrice"
                placeholder="$0.00"
                decimalScale={2}
                fixedDecimalScale={true}
                className="loanQualification__input"
                thousandSeparator={true}
                prefix={"$"}
                onChange={updateField}
              />

              {(formField.autoPrice.length === 0 ||
                Number(formField.autoPrice.replace(/,/g, "").substring(1)) ===
                  0) &&
                isApplyClicked && (
                  <p className="loanQualification__error">
                    Auto Price is required.
                  </p>
                )}
            </div>
            <div className="loanQualification__div">
              <label className="loanQualification__label">Auto Make</label>
              <input
                className="loanQualification__input"
                type="text"
                name="autoMake"
                placeholder="Auto Make"
                value={formField.autoMake}
                onChange={updateField}
              />
              {formField.autoMake.trim().length === 0 && isApplyClicked && (
                <p className="loanQualification__error">
                  Auto Make is required.
                </p>
              )}
            </div>
            <div className="loanQualification__div">
              <label className="loanQualification__label">Auto Model</label>
              <input
                className="loanQualification__input"
                type="text"
                name="autoModel"
                placeholder="Auto Model"
                value={formField.autoModel}
                onChange={updateField}
              />
              {formField.autoModel.trim().length === 0 && isApplyClicked && (
                <p className="loanQualification__error">
                  Auto Model is required.
                </p>
              )}
            </div>
            <div className="loanQualification__div">
              <label className="loanQualification__label">
                Your Yearly Income.
              </label>
              <NumberFormat
                value={formField.userYearlyIncome}
                name="userYearlyIncome"
                decimalScale={2}
                fixedDecimalScale={true}
                placeholder="$0.00"
                className="loanQualification__input"
                thousandSeparator={true}
                prefix={"$"}
                onChange={updateField}
              />

              {(formField.userYearlyIncome.trim().length === 0 ||
                Number(
                  formField.userYearlyIncome.replace(/,/g, "").substring(1)
                ) === 0) &&
                isApplyClicked && (
                  <p className="loanQualification__error">
                    Yearly Income is required.
                  </p>
                )}
            </div>
            <div className="loanQualification__div">
              <label className="loanQualification__label">
                Your Credit Score
              </label>
              <input
                className="loanQualification__input"
                type="number"
                name="userCreditScore"
                placeholder="Credit Score"
                value={formField.userCreditScore}
                onChange={updateField}
              />
              <p className="loanQualification__error">
                {isApplyClicked &&
                  (formField.userCreditScore === 0
                    ? "Credit score is required."
                    : formField.userCreditScore < 300
                    ? "Credit score needs to be >= 300."
                    : formField.userCreditScore > 850
                    ? "Credit score needs to be <= 850."
                    : "")}
              </p>
            </div>

            <div className="loanQualification__div-btn">
              <button className="loanQualification__btn" type="submit">
                Check Eligibility
              </button>
            </div>
          </form>
        </div>
        <div className="loanQualification__marketing">
          <Marketing />
        </div>
      </div>
    </div>
  );
};

export default LoanQualification;
