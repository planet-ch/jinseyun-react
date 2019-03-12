import React from 'react';
import Greeting from './../components/greeting'
import LoginButton from './../components/LoginButton'
import LogoutButton from './../components/LogoutButton'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }
    handleLoginClick = () => {
        console.log(this.state.isLoggedIn)
        this.setState({isLoggedIn: true});
      }
    
    handleLogoutClick = () => {
        console.log(this.state.isLoggedIn)
        this.setState({isLoggedIn: false});
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return (
            <div>
                <Greeting isLoggedIn={this.state.isLoggedIn} />
                {button}
            </div>
        );
    }
}
export default Login;