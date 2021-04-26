import React,{ useState} from 'react';
import { Button } from 'react-bootstrap';
import { BsTrash,BsChevronDoubleUp,BsChevronDoubleDown} from "react-icons/bs";
import * as actions from "../actions/todo";
import { connect } from "react-redux";

const Todo=({todo,...props})=> {
    const[statuses,setStatuses]=useState([{id:1,name:"all"},{id:2,name:"complete"},{id:3,name:"active"},{id:4,name:"inactive"},{id:5,name:"working on"}]);


    const deleteHandler=() =>{
        if (window.confirm('Are you sure to delete this record?'))
            props.deleteTodo(todo.id)
    }
    const statusHandler=(e)=>{   
        
        todo.status=e.target.value;
        todo.completed=e.target.value==="complete"?true:false;
        props.updateTodo(todo.id, todo)
    }
    const moveUp=()=>{
    }
    const moveDown=()=>{
    }

    return (
        <div className="rounded  input-group ">
            <li className= "flex-fill list-group-item ">{todo.text+ "   |   "+ todo.id }</li>
            <Button className= "rounded"  onClick={moveUp}  >
                <BsChevronDoubleUp/>
            </Button>
            <Button  className= "rounded" onClick={moveDown}  >
                <BsChevronDoubleDown/>
            </Button>
            <Button className= "rounded btn btn-danger" onClick={deleteHandler}  >
                <BsTrash/>
            </Button>
            <select value={todo.status}  onChange={statusHandler} className="form-select rounded form-select-sm">
                            { statuses.map((item)=>(
                                <option key={item.id} value={item.name} > {item.name} </option>
                            )) }
                </select>

      </div>
    );
  }
  

const mapStateToProps = state => ({
    todoList: state.todo.list
})
const mapActionToProps = {
    deleteTodo: actions.Delete,
    updateTodo: actions.update
}
export default connect(mapStateToProps,mapActionToProps)(Todo);