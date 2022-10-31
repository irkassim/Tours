import React from 'react';
import Tour from './Tour';
const Tours = ({ data, removeTour }) => {
  return (
    <div>
      <Tour key={data.id} data={data} removeTour={removeTour}></Tour>
    </div>
  );
};

export default Tours;
