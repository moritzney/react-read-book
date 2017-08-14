import { combineReducers } from 'redux';
import { SELECT_BOOK } from './Types';

const mockBooksList = [
  {id: 1, title: 'Book1', description: 'desc1', status: 'READ'},
  {id: 2, title: 'Book2', description: 'desc2', status: 'READ'},
  {id: 3, title: 'Book3', description: 'desc3', status: 'READ'},
];

const initialState = {
  books: mockBooksList,
  bookId: -1,
}

const BooksReducer = (state = initialState, action) => {

  switch (action.type) {
    case SELECT_BOOK:

      return (Object.assign({}, state, {...state, bookId: action.id} ));

      default:
        return state;
  }
};

const bookApp = combineReducers({
  BooksReducer,
});

export default bookApp;
