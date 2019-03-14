import React, { Component } from 'react';
import Item from './Item';
import AddItem from './AddItem';
import './App.css';
class App extends Component {
  state ={
    items:[{id:1,name:'hamza',age:22},
    {id:2,name:'rahma',age:20},
    {id:3,name:'ibtissem',age:25},
    {id:3,name:'noura',age:25}
  ]
  }
  deleteItem=(id)=>{
    let items=this.state.items.filter(item=>{
      return item.id !==id
    })
    this.setState({items})

  }
  addItem=(item)=>{
    item.id=Math.random();
   let items =this.state.items;
   items.push(item);
   this.setState({items})

  }
  render() {
    return (
      <div className="App">
      Todolist-app
    <Item items ={this.state.items} deleteItem={this.deleteItem} />
    <AddItem  addItem={this.addItem}/>
    
        </div>
    );
  }
}

export default App;
