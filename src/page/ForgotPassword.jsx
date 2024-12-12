import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { forgetPassword as forgetPasswordApi } from "../service/apiAuth";
import FormHeading from "../ui/FormHeading";
import FormContainer from "../ui/FormContainer";
import Button from "../ui/Button";
import FormRow from "../ui/FormRow";
import "../styles/forgotPassword.css";
import "../styles/Form.css";

function ForgotPassword() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
  });

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    setIsLoading(true);

    try {
      await forgetPasswordApi(values); // API call to reset password
      alert("Password reset instructions sent! Please check your inbox.");
      navigate("/login"); // Redirect to login after successful request
    } catch (err) {
      setFieldError(
        "email",
        err.message || "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
      setIsLoading(false);
    }
  };

  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form className="form">
            <FormHeading
              heading="Forgot Password?"
              para="Don't worry, we'll send reset instructions to your email."
            />

            {/* Email Input */}
            <FormRow
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              error={touched.email && errors.email}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              variant="success"
              className="btn-primary"
              disabled={isSubmitting || isLoading}
            >
              {isSubmitting || isLoading ? "Sending..." : "Submit"}
            </Button>

            {/* Back to Login */}
            <div className="back-to-login">
              <button
                type="button"
                className="btn-link"
                onClick={() => navigate("/login")}
              >
                <span>↩️</span> Back to Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
}

export default ForgotPassword;
