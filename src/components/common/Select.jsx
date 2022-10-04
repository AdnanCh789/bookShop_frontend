import React from "react";

const Select = ({ name, label, categories, category, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label text-muted">
        {label}
      </label>
      <select {...rest} name={name} id={name} className="form-control">
        {category ? (
          <option value={category._id}> {category.name}</option>
        ) : (
          <option>Please Select the Category</option>
        )}
        {categories.map((c, i) => (
          <option key={i} value={c._id}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
