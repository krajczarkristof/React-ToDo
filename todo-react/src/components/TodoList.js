import React,{ useState, useEffect} from 'react';
import {Container } from 'react-bootstrap';
import { connect } from "react-redux";
import Todo from "./Todo";
import * as actions from "../actions/todo";
const TodoList=({  ...props }) => {
 

    useEffect(() => {
        props.fetchAllTodos()
    }, []);

    return (
        <Container className=" rounded input-group p-3 mb-2 bg-secondary text-black" >
          <ul className=" flex-fill list-group">
              { 
                props.todoListFiltered.map((todo)=>(
                  <Todo key={todo.id} todo={todo}/>
                ))
              }
           </ul>
      </Container>
    );
  }
  
  const mapStateToProps = state => ({
    todoListFiltered: state.todo.filteredList
})

const mapActionToProps = {
    fetchAllTodos: actions.fetchAll,
}

export default connect(mapStateToProps, mapActionToProps)(TodoList);