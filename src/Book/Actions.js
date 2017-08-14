import { SELECT_BOOK } from './Types';

export const selectBook = (id) => {
  return ({
    type: SELECT_BOOK,
    id,
  });
};
