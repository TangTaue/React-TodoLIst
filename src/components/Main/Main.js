import React, { Component } from 'react';
import Item from '../../components/Item/Item'
import PropTypes from "prop-types"
import './Main.css'


class Main extends Component {

    static propTypes = {
        todos:PropTypes.array.isRequired,
        updateTodo:PropTypes.func.isRequired,
        deleteTodos:PropTypes.func.isRequired
    }
    render() {
        const { todos,updateTodo,deleteTodos } =  this.props
        return (
        <ul className="todo-main">
            {
                todos.map((todo)=>{
                    return <Item key={todo.id} {...todo} updateTodo = {updateTodo} deleteTodos= {deleteTodos}/>
                })
            }
        </ul>
        );
    }
}

export default Main;