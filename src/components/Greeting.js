import React from 'react';

const Greeting = (props) => {
  return (
    <div>
      <h1>hello, {props.name}!</h1>
    </div>
  );
};

export default Greeting;