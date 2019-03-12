import React from 'react';

class Click extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
    }
    componentDidMount() {

    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    handleClick = (e) => {
        console.log(this)
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}
export default Click;