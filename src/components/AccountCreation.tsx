import React, { useState } from "react";
import "./AccountCreation.css";
import { signUp } from "./../features/action";
import { useDispatch } from "react-redux";

interface AccountCreationProps {
  submitForm: () => void;
}
interface FormFieldState {
  email: string;
  password: string;
  confirmPassword: string;
}
const AccountCreation: React.FC<AccountCreationProps> = ({ submitForm }) => {
  const [formField, setFormField] = useState<FormFieldState>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isApplyClicked, setIsApplyClicked] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsApplyClicked(true);

    if (
      !/\S+@\S+\.\S+/.test(formField.email) ||
      formField.password.trim().length < 8 ||
      formField.password !== formField.confirmPassword
    ) {
      return false;
    }

    dispatch(
      signUp({
        email: formField.email,
        password: formField.password,
      })
    );
    submitForm();
  };
  const updateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value }: any = e.target;
    setFormField({
      ...formField,
      [name]: value,
    });
  };
  return (
    <div className="accountCreation">
      <h1 className="accountCreation__heading">Create your Account</h1>
      <form
        onSubmit={handleSubmit}
        className="accountCreation__form"
        noValidate
      >
        <div className="accountCreation__div">
          <label className="accountCreation__label">Email</label>
          <input
            className="accountCreation__input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formField.email}
            onChange={updateField}
          />
          <p className="accountCreation__error">
            {isApplyClicked &&
              (formField.email.trim().length === 0
                ? "Email is required."
                : !/\S+@\S+\.\S+/.test(formField.email)
                ? "Valid email id required."
                : "")}
          </p>
        </div>
        <div className="accountCreation__div">
          <label className="accountCreation__label">Password</label>
          <input
            className="accountCreation__input"
            type="password"
            name="password"
            placeholder="Enter password(min 8 characters)"
            value={formField.password}
            onChange={updateField}
          />
          <p className="accountCreation__error">
            {isApplyClicked &&
              (formField.password.trim().length === 0
                ? "Password is required."
                : formField.password.trim().length < 8
                ? "Password must be >=8 characters"
                : "")}
          </p>
        </div>
        <div className="accountCreation__div">
          <label className="accountCreation__label">Confirm Password</label>
          <input
            className="accountCreation__input"
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formField.confirmPassword}
            onChange={updateField}
          />
          <p className="accountCreation__error">
            {isApplyClicked && formField.confirmPassword.trim().length === 0
              ? "Confirm password is required."
              : formField.password !== formField.confirmPassword
              ? "Passwords do not match"
              : ""}
          </p>
        </div>
        <div className="accountCreation__div-btn">
          <button className="accountCreation__btn" type="submit">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountCreation;
