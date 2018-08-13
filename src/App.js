import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
    Shop
 */
function InputBox(props){
    return (
        <div className={"form-item"}>
            <label>{props.title}</label>
            <input className="input" id={props.id} />
        </div>
    );
}

function Button(props){
    return (
        <div className={"form-item"}>
            <button onClick={props.onclick}>{(props.title)}</button>
        </div>
    );
}

class Shop extends Component{
    constructor(props){
        super(props);

        // Bind item
        this.addItem = this.addItem.bind(this);

        // values
        this.state = {
            count : 1,
            listChosen : [],    // Chosen options
            itemsCreated : [12, 3, 3]
        };
    }

    addItem(){
        console.log("Item Added");
        this.setState({count : this.state.count + 1});
        this.setState({
            itemsCreated : this.state.itemsCreated.push(this.state.count)
        });
    }

    handleSubmit(e){
        e.preventDefault();

        console.log("Submitted form");
    }

    render(){
        let val = 0;
        return (
            <div className={"items"}>
                <InputBox title={"Customer's Name: "} />
                <div className={"products-list"}>
                    {this.state.itemsCreated.map(el => (
                        <ProductItem number={(++val)} />
                    ))}
                    <Button onClick={this.addItem} title={"Add Item"}/>
                </div>

                <Button title={"Make Purchase"} onClick={this.handleSubmit}/>
            </div>
        );
    }
}

class ProductItem extends Component{
    constructor(props){
        super(props);
        this.items = [
                {
                    name : "HP Pavilion Power 15.6 inch",
                    price : 2000000,
                    item_category : 2
                },
                {
                    name : "LG Digital Refrigerator",
                    price : 3000000,
                    item_category : 1
                },
                {
                    name : "Biowang Double Deluxe Bag-pack",
                    price : 50000,
                    item_category : 0
                },
                {
                    name : "220W Power Cable",
                    price : 150000,
                    item_category : 2
                }
            ];
    }

    render (){
        let count = 0;
        return (
            <div className={"product-item"}>
                <label>Product #{this.props.number}: </label>
                <select id={"prd-" + count}>
                    <option value={0}>{"-- Select Value --"}</option>
                    {this.items.map(elem => (
                        <option value={++count}>{elem.name}</option>
                    ))}
                </select>
            </div>
        );
    }
}

/*
    End of Shop
 */

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Byte Store : Place for buying products digitally</h1>
        </header>
        <p className="App-intro">
            <Shop />
        </p>
      </div>
    );
  }
}

export default App;
