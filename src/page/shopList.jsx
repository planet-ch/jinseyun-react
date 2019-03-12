import React from 'react'
import SearchBar from './../components/shopComponents/searchBar'
import ProductTable from './../components/shopComponents/productTable'

class ShopList extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };
    }
    jinseyun1 = () => {
        
    }
    handleSearchChange = (value) => {
        this.setState({
            filterText: value
        })
        console.log(value)
    }
    handleInStockInput = (inStockOnly) => {
        this.setState({
          inStockOnly: inStockOnly
        })
      }
    render() {
        return (
            <div>
                <SearchBar onSearchChange={this.handleSearchChange} onInStockInput={this.handleInStockInput}/>
                <ProductTable products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}/>
            </div>
        );
    }
}
export default ShopList;