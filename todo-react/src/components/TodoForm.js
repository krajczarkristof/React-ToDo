import React,{ useState} from 'react';
import {Container, Button } from 'react-bootstrap';
import { BsPlus } from "react-icons/bs";
import * as actions from "../actions/todo";
import { connect } from "react-redux";
const TodoForm=({  ...props })=> {

    const[status,setStatus]=useState("all");
    const[statuses,setStatuses]=useState([{id:1,name:"all"},{id:2,name:"complete"},{id:3,name:"active"},{id:4,name:"inactive"},{id:5,name:"working on"}]);
    const[inputText,setInputText]=useState("");
    
    
    const inputTextHangler=(e)=>{  
        setInputText(e.target.value);
    }
    const submitTodohandler=(e)=>{   
        e.preventDefault();
        if(inputText!=="")
        {
        let todo={text:inputText,date:new Date(),completed:false,status:"active",id:0}; 
        props.createTodo(todo)
        setInputText('');
        }
    }
    const statusHandler=(e)=>{
        setStatus(e.target.value);
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            submitTodohandler(e);
        }
    }  
    
    return (
        <Container  className=" rounded input-group p-3 mb-2 bg-secondary text-black">
            <input name="todoText" value={inputText} onKeyPress={handleKeyPress} onChange={inputTextHangler} placeholder="Your todo..." type="text" className="form-control" aria-label="Text input with dropdown button"/>
            <Button className= "rounded" onClick={submitTodohandler}><BsPlus/></Button>
            <div className="input-group-append">
                <select onChange={statusHandler} className=" rounded form-select form-select-sm">
                            { statuses.map((item)=>(
                                <option key={item.id} value={item.name} > { item.name} </option>
                            ))}
                </select>
          </div>
        </Container>
    );
  }

const mapStateToProps = state => ({
    todoList: state.todo.list
})
const mapActionToProps = {
    createTodo: actions.create,

}
export default connect(mapStateToProps,mapActionToProps)(TodoForm);