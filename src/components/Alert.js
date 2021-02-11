import React from 'react';

const Alert = ({ info, type }) => {
  return (
    <div className={`alert alert-${type}`}>
      {info}
    </div>
  );
}

export default Alert;
