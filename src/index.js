import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import products from './data/products';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import App from './App';
// import Clock from './page/one';
// import Click from './page/two';
import Login from './page/loginThree';
import Number from './page/number';
import FormFive from './page/formFive';
import Select from './page/select';
import ATobShow from './page/aTobShow';
import ShopList from './page/shopList';
import AuthExample from './page/what';
import AnimationExample from './page/colorRouter';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/FormFive">FormFive</Link>
                        </li>
                        <li>
                            <Link to="/FormFive/o">FormFiveo</Link>
                        </li>
                        <li>
                            <Link to="/FormFive/or">FormFiveo2</Link>
                        </li>
                        <li>
                            <Link to="/ATobShow">ATobShow</Link>
                        </li>
                        <li>
                            <Link to="/Number">Number</Link>
                        </li>
                    </ul>
                </nav>
                <Route exact  path="/FormFive" component={FormFive} />
                <Route path="/FormFive/:name" component={Select} />
                <Route path="/ATobShow" component={ATobShow} />
                <Route path="/AuthExample" component={AuthExample} />
                {/* <Route component={AnimationExample} /> */}
            </div>
        </Router>
    ), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
