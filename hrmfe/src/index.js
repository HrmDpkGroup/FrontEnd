import { store } from './_helper/store.js';
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import indexRoutes from "./routes/index.route";
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
        <Switch>
            {indexRoutes.map((prop, key) => {
                return <Route to={prop.path} component={prop.component} key={key} />;
                    })}
                </Switch>
            </HashRouter>
    </Provider>
    ,
    rootElement);
    registerServiceWorker();
