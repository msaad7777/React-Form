import { useState } from "react";
import "./checkbox.css";

function Checkbox({ name, checked, onCheck }) {
  const handleChange = (event) => {
    onCheck(name, event.target.checked);
  };

  return (
    <label htmlFor={name} className="checkbox__text">
      <input
        id={name}
        className="checkbox__input"
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleChange}
      />
      {name}
    </label>
  );
}

export default Checkbox;
