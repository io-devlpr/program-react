import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let items = [
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

class InputBox extends Component{
    constructor(props){
        super(props);

        // Input box state
        this.state = {
            text : ""
        };

        // Binding events
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({ text: e.target.value });
    }

    render(){
        return (
            <div className="form-input">
                <label>{this.props.title}</label>
                <div>
                    <input type={this.props.type} onChange={this.handleChange} value={this.state.text} placeholder={this.props.placeholder} />
                </div>
            </div>
        );
    }
}


class Dropdown extends Component {
    constructor(props){
        super(props);

        this.state = {
            listItems : items,
            value : null
        };

        // Bind events
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        console.log(e.target.value);
        if(e.target.value === 'x'){
            // Set value to null
            this.setState({ value: null });
        }
        this.setState({ value: e.target.value });
    }

    render(){
        let count = 0;
        return (
            <div className="form-dropdown">
                <label>{this.props.title}</label>
                <div>
                    <select onChange={this.handleChange}>
                        <option value="x">{this.props.default}</option>
                        {this.state.listItems.map(elem => (
                            <option value={count++}>{elem.name}</option>
                        ))}
                    </select>
                    <label>{(this.state.value !== null) ? this.state.listItems[this.state.value].price : ""}</label>
                </div>
            </div>
        );
    }
}

class Shop extends Component{
    // constructor(props){
    //     super(props)
    // }

    addItem(){
        console.log("Code for adding attempt isn't there.");
    }

    handleFormSubmit(e){
        e.preventDefault();
        console.log("Price has been calculated");
    }

    render(){
        return (
            <div className="ShopApp">
                <form method="get" action="#" id="make-purchase">
                    <InputBox title={"Customer's Name"} type={"text"}/>
                    <div className="ShopProducts">
                        <Dropdown default="Choose Item" title="Product #1"/>
                        <span onClick={this.addItem} className="addItem">+ Add Item</span>
                    </div>
                    <button onClick={this.handleFormSubmit}>Make Purchase</button>
                </form>
            </div>
        );
    }
}



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Byte Store : Place for buying products digitally</h1>
        </header>
        <div className="App-intro">
            <Shop />
        </div>
      </div>
    );
  }
}

export default App;
