import React, { useEffect } from 'react';

import { Actions } from '../Components/Scoreboard/Actions';
import { List } from '../Components/Scoreboard/List';

const Scoreboard = ({
  leaders,
  getRecords
}) => {

  useEffect(() => {
    getRecords();
  }, []);

  return (
    <div className='content d-flex flex-col justify-content-start align-items-start'>
      <h2>LEADERBOARD</h2>
      <Actions />
      <List leaders={leaders} />
    </div>
  );
};

export { Scoreboard };
