import React, { useState } from "react";
import FormRow from "../ui/FormRow";
import Button from "../ui/Button";
import { useRoute } from "../context/RouteContext";
import { forgetPassword as forgetPasswordApi } from "../service/apiAuth";
import FormHeading from "../ui/FormHeading";
import FormContainer from "../ui/FormContainer";
import Form from "../ui/Form";
import "../styles/forgotPassword.css";

function ForgotPassword() {
  const { navigate } = useRoute();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ email: "" });

  // Input validation
  const validateEmail = () => {
    if (!email) {
      setErrors({ email: "Email is required" });
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors({ email: "Please enter a valid email address" });
      return false;
    }
    setErrors({ email: "" });
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail()) return;

    setIsLoading(true);

    try {
      await forgetPasswordApi({ email });
      alert("Password reset instructions sent! Please check your inbox.");
    } catch (err) {
      setErrors({
        email: err.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormHeading
          heading="Forgot Password?"
          para="Don't worry, we'll send reset instructions to your email."
        />

        {/* Email Input */}
        <FormRow
          label="Email"
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email} // Pass error message if any
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="success"
          className="btn-primary"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Submit"}
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
    </FormContainer>
  );
}

export default ForgotPassword;
