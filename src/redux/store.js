import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { authReducer } from './auth';
import { contactsReducer } from './contacts';

const actionForIgnore = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware => {
    if (process.env.NODE_ENV === `development`) {
      return getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [...actionForIgnore],
        },
      }).concat(logger);
    } else {
      return getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [...actionForIgnore],
        },
      });
    }
  },
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

// eslint-disable-next-line
export default { store, persistor };
