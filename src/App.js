import React,{Component} from 'react';
import ToDoListItem from "./ToDoListJSX"
import styled from 'styled-components';

class App extends Component {
  state = {
    todoList:JSON.parse(localStorage.getItem("todoList")) || []
}
addTodo = (item,callBack) => {
  this.setState(
    {
      todoList:this.state.todoList.concat(item)
    },
    () => {
      localStorage.setItem("todoList",JSON.stringify(this.state.todoList))
      callBack && callBack()
    }
  )
}
  render(){
    return (
      <div className="App">
        <AppForm
          onSubmit={e =>{
          e.preventDefault();
          const titleElement = e.target.elements["title"]
          const descriptionElement = e.target.elements["description"];
          this.setState(
            {
              todoList:this.state.todoList.concat({
                title:titleElement.value,
                description:descriptionElement.value
              })
            },
            ()=>{
              titleElement.value="";
              descriptionElement.value="";
            }
          )
          }}>
          <div>
            <input id="title" placeholder="title"/>
            <br/>
            <textarea id="description" placeholder="description"></textarea>
          </div>
          <div>
            <button type="submit">登録</button>
          </div>
        </AppForm>
        <div>
          {this.state.todoList.map(todo =>(
            <ToDoListItem
            key={todo.title}
            title={todo.title}
            description={todo.description}
            onClick={()=>{
              this.setState({
                todoList:this.state.todoList.filter(x =>x!==todo)
              })
            }}
          />
          ))}
        </div>
      </div>
    );
  }
}
const AppForm = styled.form`
  width:300px;
  margin:0 auto;
`
export default App;
