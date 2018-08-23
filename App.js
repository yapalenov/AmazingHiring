import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import Table from './components/Table';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore(persistedReducer);
const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<div/>} persistor={persistor}>
        <Table />
      </PersistGate>
    </Provider>
  );
};

export default App;
