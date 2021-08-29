import React, { Component } from 'react';
import list from "./data"

class App extends Component {
  state={
    list :list,
    item: '',
    brand: '',
    units: '',
    quantity: '',
    isPurchased: false,
    newItem:[]
  }
  handleChange=(event)=>{
    
    this.setState({
      [event.target.id]:event.target.value
    })
    console.log(event.target.id)
  }

  handleClick=(event)=>{
    event.preventDefault();
    const newItem={
      list :list,
      item: this.state.item,
      brand: this.state.brand,
      units: this.state.units,
      quantity: this.state.quantity,
      isPurchased: false
    }
    this.setState({
     
      list: [newItem, ...this.state.list] 
    })
  }
  

  render() {
    return (
      <div>
        <h1>Grocery List</h1>
      <form>
        <label htmlFor="item">Item name:</label>
        <input type="text" placeholder="Item name" value={this.state.item} onChange={this.handleChange} id="item"/><p/>
        <label htmlFor="brand">Brand name:</label>
        <input type="text" placeholder="Brand" value={this.state.brand} onChange={this.handleChange} id="brand"/><p/>
        <label htmlFor="units">Unit:</label>
        <input type="number" placeholder="Units" value={this.state.units} onChange={this.handleChange} id="units"/><p/>
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" placeholder="Quantity" value={this.state.quantity} onChange={this.handleChange} id="quantity"/><p/>
        <button value="" onClick={this.handleClick}>Submit</button>
      </form>
       { this.state.list.map((product,index)=>{
          return(
            <ul>
              <li>
                {product.item} {product.quantity} {product.units}
              </li>
            </ul>
          )
        })}
        
      </div>
    );
  }
}

export default App;