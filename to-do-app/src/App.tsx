import React,{useState, useEffect} from 'react';
//import components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import 'bootstrap/dist/css/bootstrap.min.css';
//import "./App.css";
import { v4 as uuidv4 } from 'uuid';
import {Container } from 'react-bootstrap';


function App() {
//States
const[inputText,setInputText]=useState("");
const[todos,setTodos]=useState([]);
const[status,setStatus]=useState("all");
const[statuses,setStatuses]=useState([{id:uuidv4(),name:"all"},{id:uuidv4(),name:"complete"},{id:uuidv4(),name:"uncomplete"}]);
const [filteredTodos,setFilteredTodos]=useState([]);
//Effects
useEffect(()=>{
  getLocalTodos();
},[])
useEffect(()=>{
  filterHandler();
  saveLocalTodos();
},[todos,status]);
//runones

//functions
const filterHandler=()=>
{
  if(status!=="all")
  {
  setFilteredTodos(todos.filter((todo:any)=>todo.status===status));
  }
  else{
    setFilteredTodos(todos);
  }
}
const saveLocalTodos=()=>
{
  if(localStorage.getItem("todos")===null)
  {

    localStorage.setItem("todos",JSON.stringify([]));
  }
  else{
    localStorage.setItem("todos", JSON.stringify(todos));
    }
}
const getLocalTodos=()=>
{
  if(localStorage.getItem("todos")===null)
  {

    localStorage.setItem("todos",JSON.stringify([]));
  }
  else{
    let s=localStorage.getItem("todos");

    if(s!=null)
    {

      setTodos(JSON.parse(s));
    }

  }
  
}
  return (
    <Container className="p-3 mb-2 bg-primary  text-black">
     <header>
       <h1 className="text-center text-white">Kristóf's Todo List </h1>
     </header>
     <Form inputText={inputText} statuses={statuses} setStatus={setStatus} setStatuses={setStatuses} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
     <TodoList todos={todos} status={status} filteredTodos={filteredTodos} setTodos={setTodos}/>
    </Container>
  );
}

export default App;
