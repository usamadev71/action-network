import React from 'react';

import './Styles/list.scss';

const List = ({ leaders }) => {
  return (
    <ul className='leaders'>
      { leaders.map((l) => {
        return (
          <li key={`${l.name}-${l.rolls}`} className='d-flex justify-content-between'>
            <span>{l.name.toUpperCase()}</span>
            <span>{l.rolls}</span>
          </li>
        );
      })}
    </ul>
  );
};

export { List };
