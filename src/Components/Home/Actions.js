import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Modal } from '../Common/Modal';

import './Styles/actions.scss';

const Actions = ({ name, setName }) => {
  const navigate = useNavigate();
  const [show, handleShow] = useState(false);

  const handleCancel = () => {
    setName('');
    handleShow(false);
  };

  const handleConfirm = () => {
    handleShow(false);
    navigate('/game');
  };

  return (
    <>
      <button className='btn btn-primary my1' onClick={() => handleShow(true)}>NEW GAME</button>
      <button className='btn btn-success' onClick={() => navigate('/scoreboard')}>SCOREBOARD</button>
      <Modal show={show}>
        <div className='d-flex flex-col'>
          <input className='my2 input' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} />
          <div className='d-flex justify-content-end'>
            <button className='btn btn-danger mx1' onClick={handleCancel}>Cancel</button>
            <button
              className='btn btn-success'
              onClick={handleConfirm}
              disabled={name === ''}
            >
              Confirm
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export { Actions };
