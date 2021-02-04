//这里不是解构赋值
import React,{ Component} from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
// import Hello from './components/Hello/Hello'
import './App.css';

export default class App extends Component{
  state = {
    todos:[
      {id:'001',name:'吃饭',done:true},
      {id:'002',name:'睡觉',done:false},
      {id:'003',name:'玩游戏',done:true},
    ]
  }
  addTodos = (todoObj)=>{
    // const {keyCode,target} = Event
    const {todos}  = this.state
    const newTodos = [todoObj,...todos]
    this.setState({
      todos:newTodos
    })
  }
  updateTodo = (id,done)=>{
    //获取状态中的todos
    const {todos}  = this.state
    const newTodos = todos.map((todoObj)=>{
      //更改某一todo项
      if(todoObj.id === id) return {...todoObj,done}
      else{
        return todoObj
      }
    })
    this.setState({
      todos:newTodos
    })
  }
    // 删除todos
    deleteTodos = (id)=>{
      const {todos}  = this.state;
      const newTodos = todos.filter((todoObj)=>{
        return todoObj.id !== id
      })
      this.setState({
        todos:newTodos
      })
    }
    // 处理全选的回调函数
    checkedAll = (done)=>{
      const {todos} = this.state;
      const newTodos = todos.map((todo)=>{
        return {...todo,done:done}
      })
      this.setState({
        todos:newTodos
      })
    }
    // 清除所有已完成的todo    
    clearAllDone= () =>{
      const {todos} = this.state
      const newTodos = todos.filter((todo)=>{
        return todo.done === false
      })
      this.setState({
        todos:newTodos
      })
    }
    render(){
      const { todos } = this.state
      return(
        <div className="todo-container">
          <div className="todo-wrap">
          <Header addTodo = {this.addTodos}/>
          <Main todos={todos}  updateTodo = {this.updateTodo} deleteTodos={this.deleteTodos}/>
          <Footer todos={todos} checkedAll = {this.checkedAll} clearAllDone = {this.clearAllDone} /> 
          </div>
        </div>
      )
    }
}

