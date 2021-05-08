import React, { Component } from 'react'
import { FaPen , FaTrash } from 'react-icons/fa'

export default class TodoItem extends Component {
    render() {
        const { item , clearItem , editItem} = this.props;
        const { id , title } = item;
        return (
            <li key={id} className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success" onClick={ () => editItem(id)}>
                        <FaPen />
                    </span>
                    <span className="mx-2 text-danger"  onClick={ () => clearItem(id) }>
                        <FaTrash />
                    </span>
                </div>
            </li>
        )
    }
}
