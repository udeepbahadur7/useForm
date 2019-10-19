import React, { useState } from "react";

const useDropdown = (options, name, label, initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const id = label && label.replace(" ", "").toLowerCase();
  const Select = (
    <div className='form-group'>
      <label>{label}</label>
      <select
        id={id}
        className='form-control'
        name={name}
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
      >
        <option>None</option>
        {options.map(({ name, value }) => {
          return (
            <option value={value} key={value}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
  return [Select, value, setValue];
};

export default useDropdown;
