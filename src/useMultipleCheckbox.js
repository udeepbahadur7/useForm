import React, { useState } from "react";

const useMultipleCheckbox = (options, name, label, initialValues = []) => {
  const [values, setValues] = useState(initialValues);

  const MultipleCheckbox = (
    <div className='h5 bg-info text-white p-2'>
      <div className='form-group'>
        <label>{label}</label>
        {options.map(option => {
          return (
            <div className='form-check' key={option}>
              <input
                className='form-check-input'
                type='checkbox'
                name={name}
                value={option}
                checked={values.includes(option)}
                onChange={e => {
                  if (e.target.checked) {
                    setValues([...values, e.target.value]);
                  } else {
                    setValues(values.filter(value => value !== option));
                  }
                }}
              />
              <label className='form-check-label'>{option}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
  return [MultipleCheckbox, values, setValues];
};

export default useMultipleCheckbox;
