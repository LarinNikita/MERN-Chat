// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers";
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const middleware = [thunk];
// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(...middleware))
// );
// export default store;
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './slices/user';
import { dialogsReducer } from './slices/dialogs';
import { messagesReducer } from './slices/messages';

const store = configureStore({
  reducer: {
    user: userReducer,
    dialogs: dialogsReducer,
    messages: messagesReducer
  }
});

export default store;