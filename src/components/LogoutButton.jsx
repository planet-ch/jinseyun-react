import React from 'react';

class LogoutButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <button onClick={this.props.onClick}>
                    Logout
                </button>
            </div>
        );
    }
}
export default LogoutButton;