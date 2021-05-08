import React, { Component } from 'react'
import "./App.css"
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  state = {
    name: '',
    editId: null,
    items: [],
    editItem: false
  }
  handelChange = e => {
    this.setState({
      name: e.target.value
    });
  }
  handelSubmit = e => {
    e.preventDefault();
    if(this.state.name && this.state.editItem) {
      this.setState({
        items: this.state.items.map(item => {
          if(item.id === this.state.editId) {
            return { ...item , title: this.state.name}
          } 
          return item;
        }),
        name: '',
        editItem: false,
        editId: null
        
      })
    } else {
      const newItem = { id: new Date().getTime().toString() , title: this.state.name };
      this.setState({
        items: [...this.state.items , newItem],
        name: ''
      })
    }
  }
  clearItem = id => {
    this.setState({
      items: this.state.items.filter( item => item.id !== id)
    });
  }
  
  clearList = () => {
    this.setState({
      items: []
    });
  }
  editItem = id => {
    const specificItem = this.state.items.find( item => item.id === id);
    this.setState({
      name: specificItem.title,
      editId: id,
      editItem: true
    });
  }
  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-center">Todo Input</h3>
          <TodoInput 
            name={this.state.name} 
            handelChange={this.handelChange} 
            handelSubmit={this.handelSubmit} 
            />
          <TodoList 
            items={this.state.items} 
            clearItem={this.clearItem} 
            clearList={this.clearList} 
            editItem={this.editItem}/>
        </div>
      </div>
    </div>
    )
  }
}
