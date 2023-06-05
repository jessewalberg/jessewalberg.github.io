import { useState, useEffect } from "react";

const SignupForm = ({ setSuccess }) => {
  const [input, setInput] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!invalidEmail && isMounted) {
      setSuccess();
    }
  }, [invalidEmail]);

  const handleSuccess = (e) => {
    e.preventDefault();
    isValidEmail(input);
  };

  const isValidEmail = (email) => {
    const checkEmail =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
        email
      );
    setInvalidEmail(!checkEmail);
    setIsMounted(true);
  };

  return (
    <form onSubmit={handleSuccess} className="form">
      <div className="email-label-wrapper">
        <label className="email-label" htmlFor="email">
          Email address
        </label>
        {invalidEmail && (
          <label className="email-label email-label-error" htmlFor="email">
            Valid Email Required
          </label>
        )}
      </div>
      <input
        onInput={(e) => setInput(e.target.value)}
        id="email"
        name="email"
        placeholder="email@company.com"
        className={invalidEmail ? "email-error" : ""}
      />
      <button className="subscribe-button">
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};

export default SignupForm;
