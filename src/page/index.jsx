import React from 'react';

class index extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    render() {
        return (
            <div>
                123123
            </div>
        );
    }
}
export default index;
