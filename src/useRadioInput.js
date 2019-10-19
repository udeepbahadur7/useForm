import React, { useState } from "react";

const useRadioInput = (options, name, label, initialValue = "") => {
  const [state, setState] = useState(initialValue);
  const RadioInput = (
    <div className='form-group'>
      <label>{label}</label>
      {options.map(option => {
        return (
          <div className='form-check' key={option}>
            <input
              className='form-check-input'
              type='radio'
              name={name}
              value={option}
              checked={state === option}
              onChange={e => {
                window.target = e.target;

                setState(e.target.value);
              }}
            />
            <label className='form-check-label'>{option}</label>
          </div>
        );
      })}
    </div>
  );
  return [RadioInput, state, setState];
};

export default useRadioInput;
