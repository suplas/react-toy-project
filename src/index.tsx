import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
// import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker'
import BaseStore from './app/stores/BaseStore'
import CalendarStore from './app/stores/CalendarStore'
import { Provider } from 'mobx-react'

const base = new BaseStore();
const calendar = new CalendarStore();

const store = {
  base,
  calendar,
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
serviceWorker.register()
