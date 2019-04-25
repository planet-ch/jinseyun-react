import React from 'react';
class FormFive extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }
    handleSubmit = (event) => {
        console.log('提交的名字: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        名字:
                    <input type="number" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="提交" />
                </form>
                {this.props.children}
            </div>
        );
    }
}
export default FormFive;