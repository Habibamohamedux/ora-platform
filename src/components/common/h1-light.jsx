import React from 'react';
import './h1-light.css';

const H1Light = ({ text }) => {
  return (
    <h1 className="bebas-title">
      {text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index !== text.split('\n').length - 1 && <br />}
        </React.Fragment>
      ))}
    </h1>
  );
};

export default H1Light;