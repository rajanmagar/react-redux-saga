import React from 'react';
import { render  } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import configureStore from './store/configureStore';
import rootSaga from './sagas';

const store = configureStore()
store.runSaga(rootSaga)

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
