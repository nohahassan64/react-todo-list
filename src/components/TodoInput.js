import React, { Component } from 'react'
import { FaBook } from 'react-icons/fa'

export default class TodoInput extends Component {
    render() {
        const { name , handelChange , handelSubmit } = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handelSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white d-block">
                                <FaBook />
                            </div>
                        </div>
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Add A Todo Item"
                            value={name}
                            onChange={handelChange}
                         />
                    </div>
                    <button type="submit" className="btn btn-block btn-primary mt-3 w-100">
                        Add Item
                    </button>
                </form>
            </div>
        )
    }
}
