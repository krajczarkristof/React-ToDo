import React,{ useState} from 'react';
import { Button,Modal } from 'react-bootstrap';
import { BsTrash,BsChevronDoubleUp,BsChevronDoubleDown} from "react-icons/bs";
import * as actions from "../actions/todo";
import { connect } from "react-redux";
import { BsPlus } from "react-icons/bs";
const Todo=({todo,...props})=> {

    const[status,setStatus]=useState("all");
    const[statuses,setStatuses]=useState([{id:1,name:"complete"},{id:2,name:"active"},{id:3,name:"inactive"}]);
    const[inputTitle,setInputTitle]=useState(todo.title);
    const[inputTodo,setInputTodo]=useState(todo.text);
    const[deadline,setDeadline]=useState(todo.date);
    const[show,setShow]=useState(false);
    
    const inputTitleHandler=(e)=>{  
        setInputTitle(e.target.value);
    }
    const inputTodoHandler=(e)=>{  
        setInputTodo(e.target.value);
    }
    const inputTodoDateHandler=(e)=>{  
        setDeadline(e.target.value);
    }

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

        let index=props.todoListFiltered.indexOf(todo)
        if(index>0)
        {
            let order=props.todoListFiltered[index-1].order
            props.todoListFiltered[index-1].order=todo.order
            props.updateTodo(props.todoListFiltered[index-1].id, props.todoListFiltered[index-1])
            todo.order=order
            props.updateTodo(todo.id, todo)
            removeData(index,index-1)
        }
    }
    const moveDown=()=>{
        let index=props.todoListFiltered.indexOf(todo)
        if(index<props.todoListFiltered.length)
        {
            let order=props.todoListFiltered[index+1].order
            props.todoListFiltered[index+1].order=todo.order
            props.updateTodo(props.todoListFiltered[index+1].id, props.todoListFiltered[index+1])
            todo.order=order
            props.updateTodo(todo.id, todo)
            removeData(index,index+1)
        }

    }
    function removeData(index,number) {
        
        console.log(index)
        props.filteredList=[...props.todoListFiltered.splice(index,1)]
        props.filteredList=[...props.todoListFiltered.splice(number,0,todo)]
        console.log(props.todoListFiltered)

    }
    const submitTodohandler=(e)=>{   
        e.preventDefault();
        if(inputTodo!=="" && inputTitle!=="" && deadline!="")
        {
        todo.text=inputTodo;
        todo.title=inputTitle;
        todo.date=deadline;
        props.updateTodo(todo.id, todo)
        }
        setShow(!show)
    }
    const handleShow = (e) => {
        setShow(!show)

    }  
    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }
    return (
        <div className="rounded  input-group ">
            <li className= "flex-fill list-group-item " onClick={handleShow} >{inputTitle + "  |  " +formatDate(deadline)}  </li>
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

            <Modal  show={show}  >
                <Modal.Header>New Todo</Modal.Header>
                <Modal.Body>
                    <form>        
                        <div className="form-group"><input name="title" value={inputTitle} onChange={inputTitleHandler} placeholder="Title..." type="text" className="form-control"/></div>
                        <div className="form-group"><input type="date" className="form-control" name="date" value={formatDate(deadline)} onChange={inputTodoDateHandler} className="form-control"/></div>
                        <div className="form-group"><textarea className="form-control" rows="2" name="text" value={inputTodo} onChange={inputTodoHandler} > </textarea></div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className= "rounded" type="button" onClick={submitTodohandler} >Back</Button>
                </Modal.Footer>
            </Modal>
      </div>
    );
  }
  

const mapStateToProps = state => ({
    todoListFiltered: state.todo.filteredList
})
const mapActionToProps = {
    deleteTodo: actions.Delete,
    updateTodo: actions.update
}
export default connect(mapStateToProps,mapActionToProps)(Todo);