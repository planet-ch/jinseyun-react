import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
    }
    handleChange = (e) => {
        this.setState({
            searchText: e.target.value
        })
        this.props.onSearchChange(e.target.value);
    }
    handleInStockInputChange = (e) => {
        this.props.onInStockInput(e.target.checked);
    }
    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.handleChange}
                />
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        onChange={this.handleInStockInputChange}
                    />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}
export default SearchBar;