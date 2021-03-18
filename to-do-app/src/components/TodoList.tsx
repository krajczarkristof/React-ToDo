import React from 'react';
//import components
import Todo from "./Todo";
import {Container  } from 'react-bootstrap';
interface props
{ filteredTodos:any,
    todos:any,
    setTodos:any,
    status:any,
    statuses:any,

}
const TodoList=({todos,setTodos,filteredTodos,status,statuses}:props)=> {
    return (
        <Container className=" rounded input-group p-3 mb-2 bg-secondary text-black">

          <ul className=" flex-fill list-group">
            { 
              filteredTodos.map((todo:any)=>(
                <Todo key={todo.id} statuses={statuses} status={status} todos={todos} setTodos={setTodos}todo={todo}/>
              ))
            }
            
          </ul>

      </Container>
    );
  }
  
  export default TodoList;