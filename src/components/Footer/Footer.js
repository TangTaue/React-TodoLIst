import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
   //处理全选的回调函数
    handleCheckAll = (event)=>{
      this.props.checkedAll(event.target.checked)
    }

    // 清除所有已完成的todo
    deleteAllDone= ()=>{
      this.props.clearAllDone()
    }
    render() {
      const {todos} = this.props;
      const doneTodos = todos.reduce((prev,current) =>{
        return prev+(current.done ? 1:0)
      },0)
      const total = todos.length
        return (
        <div className="todo-footer">
            <label>
              <input type="checkbox" onChange={this.handleCheckAll} checked = { total === doneTodos && total !== 0 ? true : false}/>
            </label>
            <span>
              <span>已完成{doneTodos}</span> / 全部{total}
            </span>
            <button onClick={this.deleteAllDone} className="btn btn-danger">清除已完成任务</button>
        </div>
        );
    }
}

export default Footer;