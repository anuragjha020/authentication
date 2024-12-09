import React, { useState } from "react";
import FormRow from "../ui/FormRow";
import Button from "../ui/Button";
import { useRoute } from "../context/RouteContext";
import { useAuth } from "../context/AuthContext";
import { login as loginApi } from "../service/apiAuth";
import FormHeading from "../ui/FormHeading";
import ThirdPartyLogin from "../ui/ThirdPartyLogin";
import FormContainer from "../ui/FormContainer";
import Form from "../ui/Form";
import HorizontalRuleWithText from "../ui/HorizontalRuleWithText";
import "../styles/login.css";

function Login() {
  const { navigate } = useRoute();
  const { login } = useAuth();
  const [email, setEmail] = useState("anuragjha020@gmail.com");
  const [password, setPassword] = useState("Anuragjha@123");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateInputs = () => {
    let isValid = true;
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    setIsLoading(true);
    setErrors({});

    try {
      const data = await loginApi({ email, password });
      alert("Login successful");

      login({ email, password });
      navigate("/dashboard");
    } catch (err) {
      setErrors({ email: err.message || "Invalid email or password" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormHeading
          heading="Sign in"
          para="New user?"
          link="Sign up"
          to="/signup"
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
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />

        <div className="password-container">
          <FormRow
            label="Password"
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          >
            <button
              type="button"
              className="toggle-password"
              onClick={() => setPasswordVisible((prev) => !prev)}
            >
              {isPasswordVisible ? "Hide" : "Show"}
            </button>
          </FormRow>
          <span className="forgot-password">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/forgot-password");
              }}
            >
              Forgot Password?
            </a>
          </span>
        </div>

        <Button
          type="submit"
          variant="success"
          className="btn-login"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </Button>
      </Form>
    </FormContainer>
  );
}

export default Login;
