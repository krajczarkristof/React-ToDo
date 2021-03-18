import React from 'react';
import { Button } from 'react-bootstrap';
import { BsTrash,BsChevronDoubleUp,BsChevronDoubleDown} from "react-icons/bs";

interface props
{
    status:any,
    todos:any,
    todo:any,
    setTodos:any,
    statuses:any,
}
const Todo=({setTodos, todos, todo,status,statuses}:props)=> {
    const deleteHandler=() =>{
        setTodos(todos.filter((el:any) => el.id !== todo.id));
    };
    const statusHandler=(e:any)=>
    {
        setTodos(todos.map((item:any)=> {
            if(item.id===todo.id)
            {
                return{
                    ...item,
                    status:e.target.value, 
                    completed:e.target.value==="complete"?true:false,        
                };
            }
            return item;
        }));
    }

    const moveUp=()=>{
        let array=[...todos];
        let index=array.indexOf(todo);
        let elem=array.splice(index,1)[0];
        array.splice(index-1,0,elem);
        setTodos(array);
        

    }
    const moveDown=()=>{
        let array=[...todos];
        let index=array.indexOf(todo);
        let elem=array.splice(index,1)[0];
        array.splice(index+1,0,elem);
        setTodos(array);

    }
    return (
        <div className="  rounded  input-group ">
            <li className= " flex-fill list-group-item ">{ todo.text}</li>
            <Button className= " rounded"  onClick={moveUp}  >
                <BsChevronDoubleUp/>
            </Button>
            <Button  className= " rounded" onClick={moveDown}  >
                <BsChevronDoubleDown/>
            </Button>
            <Button className= " rounded btn btn-danger" onClick={deleteHandler}  >
                <BsTrash/>
            </Button>
            <select value={todo.status} onChange={statusHandler} className="form-select rounded form-select-sm">
                            { statuses.map((item:any)=>(
                                <option key={item.id} value={item.name} > { item.name} </option>
                            )) }
                </select>
      </div>
    );
  }
  
  export default Todo;