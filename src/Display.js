import React, { useState } from "react";

const Display = ({ data }) => {
  const formatValue = data =>
    Array.isArray(data) ? data.join(", ") : data.toString();
  let keys = Object.keys(data);
  return keys.length === 0 ? (
    <div className='h5 bg-secondary p-2 text-white'>No Data</div>
  ) : (
    <div className='container-fluid bg-secondary p-2'>
      {keys.map(key => {
        return (
          <div key={key} className='row h5 text-white'>
            <div className='col'>{key}: </div>
            <div className='col'>{formatValue(data[key])}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Display;
