import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        const { items , clearItem , clearList , editItem} = this.props;
        const renderList = items.map(item => {
            return(
                <TodoItem 
                    key={item.id} 
                    item={item} 
                    clearItem={clearItem} 
                    editItem={editItem}
                />
            );
        });
        return (
            <ul className="list-group my-5">
                <h3 className="text-center">Todo List</h3>
                {renderList}
                <button 
                    type="submit" 
                    className="btn btn-block btn-danger mt-5" 
                    onClick={clearList}
                    >
                        Clear List
                </button>
            </ul>
        )
    }
}
