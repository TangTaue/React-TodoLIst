import React, { Component } from 'react';
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import './Header.css'


class Header extends Component {
    // 类型限制
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }

    handleKeyUp=(event)=>{
        const {keyCode,target} = event
        if(keyCode !== 13) return 
        console.log(nanoid())
        if(target.value.trim() === ''){
            alert('输入的任务不能为空！')
            return
        }
        const todo = {
            id:nanoid(),
            name:target.value,
            done:false
        }
        this.props.addTodo(todo)
        target.value = ''
    }    
    render() {
        return (
        <div className="todo-header">
            <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
        </div>
        );
    }
}

export default Header;