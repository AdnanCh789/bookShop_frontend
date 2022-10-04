import React from "react";

const Input = ({
  name,
  label,
  placeholder = "",
  onChange,
  value,
  type = "text",
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label text-muted">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className="form-control"
        id={name}
        value={value}
      />
    </div>
  );
};

export default Input;
