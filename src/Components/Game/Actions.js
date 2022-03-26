import React, { useState } from 'react';

const Actions = ({
  total,
  rolls,
  setScore,
  setTotal,
  setRolls
}) => {
  const [powerUp, setPowerUp] = useState(0);
  const [use, setUse] = useState(false);

  const handleEven = () => {
    const next = Math.floor(Math.random() * 11/2) * 2;
    setValues(next);
  };

  const handleOdd = () => {
    const next = Math.floor(Math.random() * 10/2) * 2 + 1;
    setValues(next);
  };

  const handleRolls = () => {
    const next = Math.floor(Math.random() * 11);
    setValues(next);
  };

  const handlePowerUp = () => {
    setPowerUp(powerUp + 1);
    setUse(true);
  };

  const setValues = (next) => {
    if (use) {
      setUse(false);
    }
    setScore(next);
    if (total + next <= 50) {
      setTotal(total + next);
    }
    setRolls(rolls + 1);
  };

  return (
    <>
      { use ?
        <div className='d-flex my2'>
          <button className='btn btn-success mx1' onClick={handleEven}>ROLL EVEN</button>
          <button className='btn btn-success mx1' onClick={handleOdd}>ROLL ODD</button>
        </div> :
        <button className='btn btn-primary my2' onClick={handleRolls}>ROLL</button>
      }
      <button
        className='btn btn-danger'
        onClick={handlePowerUp}
        disabled={powerUp === 2 || use}
      >
        POWER UPS ({2 - powerUp})
      </button>
    </>
  );
};

export { Actions };
