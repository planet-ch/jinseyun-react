import React from 'react';
import ListItem from './../components/listItem';
class Number extends React.Component {
    render() {
        const numbers = this.props.numbers;
        const listItems = numbers.map((number) =>
            <ListItem key={number.toString()} value={number}/>
        );
        return (
            <ul>{listItems}</ul>
        );
    }
}
export default Number;