import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { signup as signupApi } from "../service/apiAuth";
import FormHeading from "../ui/FormHeading";
import ThirdPartyLogin from "../ui/ThirdPartyLogin";
import FormContainer from "../ui/FormContainer";
import HorizontalRuleWithText from "../ui/HorizontalRuleWithText";
import Button from "../ui/Button";
import FormRow from "../ui/FormRow";
import "../styles/signup.css";
import "../styles/Form.css";

function Signup() {
  const navigate = useNavigate();
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const initialValues = {
    email: "",
    userName: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    userName: Yup.string().required("User name is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      )
      .required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      await signupApi(values); // API call for signup
      alert("Signup successful.");
      navigate("/login");
    } catch (err) {
      setFieldError("email", err.message || "An error occurred during signup");
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
              heading="Get started"
              para="Already have an account?"
              link="Login"
              to="/login"
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

            {/* User Name Field */}
            <FormRow
              label="User Name"
              name="userName"
              type="text"
              placeholder="Enter your user name"
              error={touched.userName && errors.userName}
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
                    ? "toggle-password-signup-with-error"
                    : "toggle-password-signup"
                }`}
                onClick={() => setPasswordVisible((prev) => !prev)}
              >
                {isPasswordVisible ? "Hide" : "Show"}
              </button>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="success"
              className="btn-signup"
              disabled={isSubmitting || !isValid}
            >
              {isSubmitting ? "Signing up..." : "Sign Up"}
            </Button>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
}

export default Signup;
