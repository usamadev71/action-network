import { storage } from '../../Services/Storage';

export const addScore = (data) => {
  const options = {
    key: 'records',
    data
  };

  return storage.set(options);
};
