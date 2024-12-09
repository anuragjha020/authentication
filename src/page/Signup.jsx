import React, { useState } from "react";
import { useRoute } from "../context/RouteContext";
import FormRow from "../ui/FormRow";
import Button from "../ui/Button";
import { signup as signupApi } from "../service/apiAuth";
import FormHeading from "../ui/FormHeading";
import ThirdPartyLogin from "../ui/ThirdPartyLogin";
import FormContainer from "../ui/FormContainer";
import Form from "../ui/Form";
import HorizontalRuleWithText from "../ui/HorizontalRuleWithText";
import "../styles/signup.css";

function Signup() {
  const { navigate } = useRoute();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!userName) {
      errors.userName = "User name is required";
      isValid = false;
    }

    if (!password) {
      errors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      isValid = false;
    } else if (!/[A-Z]/.test(password)) {
      errors.password = "Password must contain at least one uppercase letter";
      isValid = false;
    } else if (!/[a-z]/.test(password)) {
      errors.password = "Password must contain at least one lowercase letter";
      isValid = false;
    } else if (!/[0-9]/.test(password)) {
      errors.password = "Password must contain at least one number";
      isValid = false;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.password = "Password must contain at least one special character";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setError("");

    try {
      await signupApi({ userName, email, password });
      alert("Signup successful.");
      navigate("/login");
    } catch (err) {
      setError(err.message || "An error occurred during signup");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormHeading
          heading="Get started"
          para="Already have an account?"
          link="Login"
          to="/login"
        />

        <ThirdPartyLogin />
        <HorizontalRuleWithText text="or" />

        <FormRow
          label="Email"
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          required
          error={formErrors.email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormRow
          label="User Name"
          type="text"
          id="userName"
          placeholder="Enter your user name"
          value={userName}
          required
          error={formErrors.userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <FormRow
          label="Password"
          type={isPasswordVisible ? "text" : "password"}
          id="password"
          placeholder="Enter your password"
          value={password}
          error={formErrors.password}
          onChange={(e) => setPassword(e.target.value)}
        >
          <button
            type="button"
            className={`${
              formErrors.email || formErrors.password
                ? "toggle-password-with-error"
                : "toggle-password"
            }`}
            onClick={() => setPasswordVisible((prev) => !prev)}
          >
            {isPasswordVisible ? "hide" : "show"}
          </button>
        </FormRow>

        {error && <div className="error-message">{error}</div>}

        <Button
          type="submit"
          variant="success"
          className="btn-signup"
          disabled={isLoading}
        >
          {isLoading ? "Signing up..." : "Sign Up"}
        </Button>
      </Form>
    </FormContainer>
  );
}

export default Signup;
