import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'weather',
      storage,
      whitelist: ['weather'],
    },
    reducers
  );

  return persistedReducer;
};
