import React from 'react';

import { Content } from '../Components/Home/Content';
import { Actions } from '../Components/Home/Actions';

const Home = ({
  name,
  setName
}) => {
  return (
    <div className='content d-flex flex-col justify-content-start align-items-center'>
      <Content />
      <Actions
        name={name}
        setName={setName}
      />
    </div>
  );
};

export { Home };
