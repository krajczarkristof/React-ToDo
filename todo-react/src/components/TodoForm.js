import React,{ useState} from 'react';
import {Container, Button, Modal } from 'react-bootstrap';
import { BsPlus } from "react-icons/bs";
import * as actions from "../actions/todo";
import { connect } from "react-redux";

const TodoForm=({  ...props })=> {

    const[status,setStatus]=useState("all");
    const[statuses,setStatuses]=useState([{id:1,name:"all"},{id:2,name:"complete"},{id:3,name:"active"},{id:4,name:"inactive"}]);
    const[inputTitle,setInputTitle]=useState("");
    const[inputTodo,setInputTodo]=useState("");
    const[deadline,setDeadline]=useState("");
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
    const submitTodohandler=(e)=>{   
        e.preventDefault();
        if(inputTodo !=="" && inputTitle !=="" && deadline !=="")
        {
        let todo={title:inputTitle,text:inputTodo ,date:deadline,completed:false,order:props.todoListFiltered.length,status:"active",id:0}; 
        props.createTodo(todo)
        
        }
        setInputTitle("");
        setInputTodo("")
        setDeadline("")
        setShow(!show)
    }
    const statusHandler=(e)=>{
        setStatus(e.target.value);
        props.filterTodo(e.target.value);
    }

    const handleShow = (e) => {
        setShow(!show)

    }  
    const handleClose = (e) => {
        setShow(false)

    }  
    
    return (
        <Container  className=" rounded input-group p-3 mb-2 bg-secondary text-black">
            <input name="Text" onClick={handleShow} href="#textRef" placeholder="Your todo..." type="text" className="form-control" />
            <div className="input-group-append">
                <select onChange={statusHandler} className=" rounded form-select form-select-sm">
                            { statuses.map((item)=>(
                                <option key={item.id} value={item.name} > { item.name} </option>
                            ))}
                </select>
            </div>

            <Modal  show={show} onHide={handleClose} >
                <Modal.Header>New Todo</Modal.Header>
                <Modal.Body>
                    <form>        
                        <div className="form-group"><input name="todoTitle" value={inputTitle} onChange={inputTitleHandler} placeholder="Title..." type="text" className="form-control"/></div>
                        <div className="form-group"><input type="date" className="form-control" name="todoDate" value={deadline} onChange={inputTodoDateHandler} className="form-control"/></div>
                        <div className="form-group"><textarea className="form-control" rows="2" name="todotext" value={inputTodo} onChange={inputTodoHandler} > </textarea></div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className= "rounded" type="button" onClick={submitTodohandler} ><BsPlus/></Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
  }

const mapStateToProps = state => ({
    todoListFiltered: state.todo.filteredList
})
const mapActionToProps = {
    createTodo: actions.create,
    filterTodo:actions.filterTodo
}
export default connect(mapStateToProps,mapActionToProps)(TodoForm);