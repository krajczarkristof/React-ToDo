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
        Task<List<Todo>> GetTodos();

        Task<Todo> GetTodo(int id);

        Task<Todo> AddTodo(Todo todo);

        Task<Todo> EditTodo(int id,Todo todo);

        Task<Todo> DeleteTodo(int id);
    }

}
