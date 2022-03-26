import React from 'react';

const Content = ({
  score,
  total,
  rolls
}) => {
  return (
    <>
      <h3>NEW NUMBER = {score}</h3>
      <h1>{total}</h1>
      <h3>ROLLS = {rolls}</h3>
    </>
  );
};

export { Content };
