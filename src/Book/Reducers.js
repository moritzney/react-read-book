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
  // extra empty line not required
  switch (action.type) {
    case SELECT_BOOK:
      // extra empty line not required

      // Might be preferable to have it on multiple line, for easier refactoring
      // What do you think?
      return (Object.assign({}, state, {...state, bookId: action.id} ));

      default:
        return state;
  }
};

// Should be on its own '/src/reducers/index.js' file
// What do you think?
const bookApp = combineReducers({
  BooksReducer,
});

export default bookApp;
