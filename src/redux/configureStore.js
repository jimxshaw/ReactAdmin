import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  // This will add support for redux dev tools.
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    // This middleware will warn us if we accidentally
    // mutate redux state. It is a function call.
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
