import { createStore, applyMiddleware } from 'redux';
// redux-persist caches our store depending on certain configs.
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

// this syntax is more scalable than just adding 'logger' inside 'applyMiddleware as soon as it gets bigger
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// calls persistStore() function and pass in store as argument.
// persistor is a persisted version of our store
export const persistor = persistStore(store);

// export default object { store, persitor } so we can have both access to items inside store, good practice.
export default { store, persistor };

