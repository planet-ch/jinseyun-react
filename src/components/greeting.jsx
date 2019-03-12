import React from 'react';

import Clock from './../page/one';
import Click from './../page/two';
class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let isLoggedIn = this.props.isLoggedIn
        let showText;
        // if(isLoggedIn){
        //     showText = <h1>Welcome back!</h1>;
        // }else{
        //     showText = <h1>Please sign up.</h1>;
        // }
        if(isLoggedIn){
            showText = <Clock />;
        }else{
            showText = <Click />;
        }
        return (
            <div>
                {showText}
            </div>
        );
    }
}
export default Greeting;