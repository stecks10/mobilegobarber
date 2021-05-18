import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist'

// eslint-disable-next-line
export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'gobarber',
      storage: AsyncStorage,
      whitelist: ['auth', 'user'],
    },
    reducers,
  )

  return persistedReducer
}