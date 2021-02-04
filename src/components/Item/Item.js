import React, { Component } from 'react';
import './Item.css'

export default class Item extends Component {
    state = {mouse:false}

    handleMouse = (flag)=>{
        return ()=>{    
            this.setState({mouse:flag})
        }
    }
    handleChecked = (id)=>{
        return (event)=>{
            this.props.updateTodo(id,event.target.checked)
        }
    }
    handledeleTodo = (id)=>{
        return ()=>{
            if(window.confirm("确定删除吗？")){
                this.props.deleteTodos(id)
            }
        }
    }
    render() {
        const {id,name,done} = this.props
        return (
        <li  style={{backgroundColor:this.state.mouse ? "#ddd" : "white"}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
            <label>
            <input type="checkbox" checked={done} onChange={this.handleChecked(id)}/>
            <span>{name}</span>
            </label>
            <button  onClick={ this.handledeleTodo(id) } className="btn btn-danger" style={{ display: this.state.mouse? 'block' :'none' }}>删除</button>
        </li>
        );
    }
}