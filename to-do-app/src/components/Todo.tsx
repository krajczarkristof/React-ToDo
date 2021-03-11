import React from 'react';
import { Button } from 'react-bootstrap';
import { BsTrash,BsCheckCircle} from "react-icons/bs";
interface props
{
    status:any,
    todos:any,
    todo:any,
    setTodos:any
}
const Todo=({setTodos, todos, todo,status}:props)=> {
    const deleteHandler=() =>{
        setTodos(todos.filter((el:any) => el.id !== todo.id));
    };
    const completeHandler=() =>
    {   console.log(status);
        setTodos(todos.map((item:any)=> {
            if(item.id===todo.id)
            {
                console.log(item.completed===true);
                return{
                    ...item,
                    status:(item.completed===false)?'complete':'uncomplete',
                    completed:!item.completed,         

                };
            }
            return item;
        }));
    }
    return (
        <div className=" d-flex input-group">
            <li className={`d-flex  list-group-item ${todo.completed ? "completed":''}`}>{todo.date.toString()+" "+ todo.text.toString()}</li>
            <Button onClick={completeHandler}  >
                <BsCheckCircle/>
            </Button>
            <Button onClick={deleteHandler}  >
                <BsTrash/>
            </Button>
      </div>
    );
  }
  
  export default Todo;