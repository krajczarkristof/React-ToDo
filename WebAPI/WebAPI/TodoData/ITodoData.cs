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

        Todo GetTodo(Guid id);

        Todo AddTodo(Todo todo);

        Todo EditTodo(Todo todo);

        void DeleteTodo(Todo todo);


    }
}
