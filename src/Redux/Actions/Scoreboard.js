import * as types from './Constants';
import { storage } from '../../Services/Storage';

export const getRecords = () => {
  const options = {
    key: 'records',
    types: [types.GET_RECORDS]
  };

  return storage.get(options);
};
