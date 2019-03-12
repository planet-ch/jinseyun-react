import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import products from './data/products';
// import App from './App';
// import Clock from './page/one';
// import Click from './page/two';
// import Login from './page/loginThree';
// import Number from './page/number';
// import FormFive from './page/formFive';
// import Select from './page/select';
// import ATobShow from './page/aTobShow';
import ShopList from './page/shopList';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ShopList products={products}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
