import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import { dummySaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();
//connect store to reducers
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(dummySaga);

export default store;
