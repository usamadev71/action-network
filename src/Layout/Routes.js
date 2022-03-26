import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import HomeContainer from '../Redux/Containers/Home';
import GameContainer from '../Redux/Containers/Game';
import ScoreboardContainer from '../Redux/Containers/Scoreboard';

const AppRoutes = () => {
  return (
    <div className='d-flex align-items-center justify-content-center h-100'>
      <Routes>
        <Route exact path='/' element={<HomeContainer />} />
        <Route exact path='game' element={<GameContainer />} />
        <Route exact path='/scoreboard' element={<ScoreboardContainer />} />
        <Route
          path='*'
          element={
            <Navigate replace to='/' />
          }
        />
      </Routes>
    </div>
  );
};

export { AppRoutes };
