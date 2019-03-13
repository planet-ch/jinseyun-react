import React from 'react';
import { withRouter } from "react-router-dom";

class ListItem extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    toNew = () => {
        this.props.history.push("/ATobShow");
    }
    render() {
        return (
            <div className="box">
                <li>{this.props.value}</li>
                <div className="toNew" onClick={this.toNew}>点我</div>
            </div>
        );
    }
}
export default withRouter(ListItem);