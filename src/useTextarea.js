import React, { useState } from "react";

const useTextarea = (name, label, initialValue = "") => {
  const [value, setValue] = useState("");
  const Textarea = (
    <div className='form-group'>
      <label>{label}</label>
      <textarea
        className='form-control'
        name={name}
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
  return [Textarea, value, setValue];
};
export default useTextarea;
