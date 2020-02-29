import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './rootReducer';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const middlewares = [];
if (process.env.NODE_ENV !== 'production') {
   middlewares.push(logger);
}


const persistConfig = {
   key: 'root',
   storage,
}
export const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer,applyMiddleware(...middlewares), );
export const persistor = persistStore(store);

export default store;
