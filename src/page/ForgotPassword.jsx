import React, { useState } from "react";
import FormRow from "../ui/FormRow";
import Button from "../ui/Button";
import { useRoute } from "../context/RouteContext";
import FormHeading from "../ui/FormHeading";
import FormContainer from "../ui/FormContainer";
import Form from "../ui/Form";
import "../styles/forgotPassword.css";

function ForgotPassword() {
  const { navigate } = useRoute(); 
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!email) {
      setError("Email is required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Clear error on successful validation
    setError("");
    console.log("submitted");
    alert("Reset instructions sent!");
  };

  return (
    <div className="forgot-password-container">
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          {/* Heading */}
          <div className="form-heading">
            <FormHeading
              heading="Forgot password?"
              para="No worries, We’ll send your reset instructions."
            />
          </div>

          {/* Input Fields */}
          <FormRow
            label="Email"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            error={error} // Pass error message to FormRow
          />

          {/* Submit Button */}
          <Button type="submit" className="btn-primary btn-full-width">
            Submit
          </Button>

          {/* Back to Login Link */}
          <div className="back-to-login">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/login");
              }}
            >
              <span>↩️</span> Back to Login
            </a>
          </div>
        </Form>
      </FormContainer>
    </div>
  );
}

export default ForgotPassword;
