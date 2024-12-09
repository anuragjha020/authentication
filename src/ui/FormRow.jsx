import React from "react";
import "../styles/formRow.css";

function FormRow({
  label,
  type,
  id,
  placeholder,
  value,
  onChange,
  required,
  error,
  children,
}) {
  return (
    <div className="form-row-container">
      <label htmlFor={id} className="form-row-label">
        {label} {required && <sup>*</sup>}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`form-row-input ${error ? "is-invalid" : ""}`}
        required={false}
      />
      {error && <div className="invalid-feedback">{error}</div>}
      {children}
    </div>
  );
}

export default FormRow;
