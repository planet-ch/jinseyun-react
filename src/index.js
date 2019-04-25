import React from 'react'
import configureStore from './store'
import ReactDOM from 'react-dom';
import Route from './router';
import FastClick from 'fastclick';
import { AppContainer } from 'react-hot-loader';
import {Provider} from 'react-redux';

FastClick.attach(document.body);
const store = configureStore()


const render = Component => {
    ReactDOM.render(
        //绑定redux、热加载
        <Provider store={store}>
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>,
        document.getElementById('root'),
    )
}

render(Route);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./router', () => {
        render(Route);
    })
}
