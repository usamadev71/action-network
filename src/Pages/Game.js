import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Content } from '../Components/Game/Content';
import { Actions } from '../Components/Game/Actions';
import { Modal } from '../Components/Common/Modal';

const Game = ({
  name,
  records,
  setName,
  addScore,
  getRecords
}) => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [rolls, setRolls] = useState(0);

  useEffect(() => {
    if (!name) {
      navigate('/');
    } else {
      getRecords();
    }
  }, []);

  useEffect(() => {
    if (total === 50) {
      addScore([
        ...records, {
          name,
          rolls
        }
      ]);
    }
  }, [
    total,
    name,
    rolls,
    records
  ]);

  const restart = () => {
    setScore(0);
    setTotal(0);
    setRolls(0);
  };

  const goHome = () => {
    setName('');
    navigate('/');
  };

  return (
    <div className='content d-flex flex-col justify-content-start align-items-center'>
      <Content
        score={score}
        total={total}
        rolls={rolls}
      />
      <Actions
        rolls={rolls}
        total={total}
        setScore={setScore}
        setTotal={setTotal}
        setRolls={setRolls}
      />
      <Modal show={total === 50}>
        { records.length === 0 ||
          records[0] &&
          records[0].rolls > rolls ?
          <>
            <h2>YOU WIN!</h2>
            <p>CONGRATULATIONS, YOU HAVE SET A NEW RECORD</p>
          </> :
          <h2>YOU WIN!</h2>
        }
        <button onClick={goHome}>HOME</button>
        <button onClick={restart}>NEW GAME</button>
      </Modal>
    </div>
  );
};

export { Game };
