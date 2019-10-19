import React, { useState } from "react";

const useCheckbox = (name, label, initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const Checkbox = (
    <div className='form-group'>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='checkbox'
          name={name}
          onChange={e => {
            console.log(e.target.checked);

            setValue(e.target.checked);
          }}
        />
        <label className='form-check-label'>{label}</label>
      </div>
    </div>
  );
  return [Checkbox, value, setValue];
};

export default useCheckbox;
