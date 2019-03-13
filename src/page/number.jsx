import React from 'react';
import ListItem from './../components/listItem';
import numbers from './../data/number';
class Number extends React.Component {
    
    render() {
        const listItems = numbers.map((number) =>
            <ListItem key={number.toString()} value={number} />
        );
        return (
            <div className="box">
                <ul>{listItems}</ul>
                <div className="toNew" onClick={this.toNew}>点我</div>
            </div>
        );
    }
}
export default Number;