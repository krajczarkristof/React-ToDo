import React from 'react';
//import components
import Todo from "./Todo";
import {Container  } from 'react-bootstrap';
interface props
{ filteredTodos:any,
    todos:any,
    setTodos:any,
    status:any,

}
const TodoList=({todos,setTodos,filteredTodos,status}:props)=> {
    return (
        <Container className="input-group p-3 mb-2 bg-secondary text-black">
          <ul className="list-group">
            {
              filteredTodos.map((todo:any)=>(
                <Todo key={todo.id} status={status} todos={todos} setTodos={setTodos}todo={todo}/>
              ))
            }
            
          </ul>
      </Container>
    );
  }
  
  export default TodoList;