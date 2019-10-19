import React, { useState } from "react";

const useInput = (name, initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  };
  const Input = (
    <div className='form-group'>
      <label>Name</label>
      <input
        className='form-control'
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
  return [Input, value, setValue, name];
};

export default useInput;
