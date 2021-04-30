using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.TodoData
{
    public interface ITodoData
    {
        List<Todo> GetTodos();

        Todo GetTodo(int id);

        Todo AddTodo(Todo todo);

        Todo EditTodo(int id,Todo todo);

        Todo DeleteTodo(int id);
    }

}
