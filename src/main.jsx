import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import storeReducer from './Utils/Redux/rootReducer.js';

import App from './App.jsx'

const store = createStore(storeReducer);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
)
