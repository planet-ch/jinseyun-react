import React from 'react';

class ListItem extends React.Component {
    render() {
        return (
            <li>{this.props.value}</li>
        );
    }
}
export default ListItem;