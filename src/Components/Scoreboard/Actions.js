import React from 'react';
import { useNavigate } from 'react-router-dom';

const Actions = () => {
  const navigate = useNavigate();

  return (
    <button className='btn btn-primary' onClick={() => navigate('/')}>HOME</button>
  );
};

export { Actions };
