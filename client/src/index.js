import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";
import SearchStore from './store/SearchStore';

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore(),
        search: new SearchStore(),
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

