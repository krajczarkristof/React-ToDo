using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebTodoAPI.Models;

namespace WebTodoAPI.TodoData
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
