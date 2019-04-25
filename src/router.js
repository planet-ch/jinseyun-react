import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from './utils/asyncComponent';

const ATobShow = asyncComponent(() => import("./page/aTobShow"));
const what = asyncComponent(() => import("./page/what"));
const shopList = asyncComponent(() => import("./page/shopList"));
const index = asyncComponent(() => import("./page/index"));
const App = asyncComponent(() => import("./page/App"));
// const balance = asyncComponent(() => import("@/page/balance/balance"));

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends React.Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={App} />
                    {/*<Route path="/what" component={what} />*/}
                    {/*<Route path="/shopList" component={shopList} />*/}
                    <Redirect to="/" />
                </Switch>
            </HashRouter>
        )
    }
}
