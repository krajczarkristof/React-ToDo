import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Container, Button } from 'react-bootstrap';
import { BsPlus } from "react-icons/bs";
interface props{
    inputText:any,
    todos:any,
    setTodos:any,
    setInputText:any,
    setStatus:any,
    setStatuses:any,
    statuses:any,
}

const Form=({todos,inputText,setTodos, setInputText,setStatus,setStatuses,statuses}:props)=> {

    const inputTextHangler=(e:any)=>
    {
        setInputText(e.target.value);
        
    }
    const submitTodohandler=(e:any)=>
    {   
        e.preventDefault();
        setTodos([...todos,{text:inputText,date:Date() ,completed:false,status:"uncomplete",id:uuidv4()}]);
        setInputText('');
    }
    const statusHandler=(e:any)=>
    {
        setStatus(e.target.value);
    }

    return (
        <Container  className="input-group p-3 mb-2 bg-secondary text-black">
            <input value={inputText} onChange={inputTextHangler} placeholder="Your todo..." type="text" className="form-control" aria-label="Text input with dropdown button"/>
            <Button onClick={submitTodohandler}><BsPlus/></Button>
            <div className="input-group-append">
                <select onChange={statusHandler} className="form-select form-select-sm">
                            { statuses.map((item:any)=>(
                                <option key={item.id} value={item.name} > { item.name} </option>
                            )) }
                </select>
          </div>
        </Container>
        
      

      
    );
  }
  
  export default Form;