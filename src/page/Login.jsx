import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useAuth } from "../context/AuthContext";
import { login as loginApi } from "../service/apiAuth";
import FormHeading from "../ui/FormHeading";
import ThirdPartyLogin from "../ui/ThirdPartyLogin";
import FormContainer from "../ui/FormContainer";
import HorizontalRuleWithText from "../ui/HorizontalRuleWithText";
import Button from "../ui/Button";
import FormRow from "../ui/FormRow";
import "../styles/login.css";
import "../styles/Form.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const initialValues = {
    email: "anuragjha020@gmail.com",
    password: "Anuragjha@123",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      await loginApi(values); // API call
      alert("Login successful");
      login(values); // Update context
      navigate("/dashboard");
    } catch (err) {
      // Assuming the API error message could be a specific email error or general message
      if (err.message.includes("Invalid email or password")) {
        setFieldError("email", "Invalid email or password");
      } else {
        setFieldError("email", err.message || "Invalid email or password");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid, errors, touched }) => (
          <Form className="form">
            <FormHeading
              heading="Sign in"
              para="New user?"
              link="Sign up"
              to="/signup"
            />

            <ThirdPartyLogin />
            <HorizontalRuleWithText text="or" />

            {/* Email Field */}
            <FormRow
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              error={touched.email && errors.email}
            />

            {/* Password Field */}
            <div className="password-container">
              <FormRow
                label="Password"
                name="password"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Enter your password"
                error={touched.password && errors.password}
              />
              <button
                type="button"
                className={`${
                  touched.password && errors.password
                    ? "toggle-password-with-error"
                    : "toggle-password"
                }`}
                onClick={() => setPasswordVisible((prev) => !prev)}
              >
                {isPasswordVisible ? "Hide" : "Show"}
              </button>
              {/* Forgot Password */}
              <span className="forgot-password">
                <Link to="/forgot-password" className="btn-link">
                  Forgot Password?
                </Link>
              </span>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="success"
              className="btn-login"
              disabled={isSubmitting || !isValid}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
}

export default Login;
