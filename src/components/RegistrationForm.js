import { useState } from "react";

const RegistrationForm = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setpasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = ({ target: { value } }) => {
    if (errorMessage) {
      setErrorMessage("");
    }

    setEmailValue(value);
  };

  const handlePasswordChange = ({ target: { value } }) => {
    if (errorMessage) {
      setErrorMessage("");
    }

    setpasswordValue(value);
  };

  const handleConfirmPasswordChange = ({ target: { value } }) => {
    if (errorMessage) {
      setErrorMessage("");
    }

    setConfirmPasswordValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      passwordValue === "" ||
      emailValue === "" ||
      confirmPasswordValue === ""
    ) {
      setErrorMessage("You need to fill all fields");
      return;
    }

    if (!emailValue.includes("@")) {
      setErrorMessage("Please, enter valid email");
      return;
    }

    if (passwordValue !== confirmPasswordValue) {
      setErrorMessage("Your passwords don't match");
    }

    console.log({
      email: emailValue,
      password: passwordValue,
      confirmPassword: confirmPasswordValue,
    });
  };

  return (
    <div className="div">
    <form onSubmit={handleSubmit} noValidate>

      <label className="placeholder">
        Email:{" "}
        <input className="input"
          type="email"
          name="email"
          value={emailValue}
          onChange={handleEmailChange}
        />
      </label>

      
      <label className="placeholder">
        password:{" "}
        <input className="input"
          type="password"
          name="password"
          value={passwordValue}
          onChange={handlePasswordChange}
        />
      </label>


      <label className="placeholder">
        confirmPassword:{" "}
        <input className="input"
          type="password"
          name="confirmPassword"
          value={confirmPasswordValue}
          onChange={handleConfirmPasswordChange}
        />
      </label>

      {errorMessage && <div className="error">{errorMessage}</div>}

      <button type="submit" className="button">Submit</button>
    </form>
    </div>
  );
};

export default RegistrationForm;
