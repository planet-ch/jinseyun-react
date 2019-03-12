import React from 'react';

class LoginButon extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <button onClick={this.props.onClick}>
                    Login
                </button>
            </div>
        );
    }
}
export default LoginButon;