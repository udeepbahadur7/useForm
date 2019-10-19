import React, { useState, useEffect } from "react";

const useMultiSelect = (options, name, label, initialValue = []) => {
  const [value, setValue] = useState(initialValue);
  const id = label && label.replace(" ", "").toLowerCase();
  const MultiSelect = (
    <div className='form-group'>
      <label>Ice Cream Toppings</label>
      <select
        className='form-control'
        multiple={true}
        name='toppings'
        value={value}
        onChange={e => {
          setValue(
            [...e.target.options]
              .filter(option => option.selected)
              .map(option => option.value)
          );
        }}
      >
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
  return [MultiSelect, value, setValue];
};

export default useMultiSelect;
