using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebAPI.Models;
using WebAPI.TodoData;

namespace Web_Api_Test
{
    class TodoListDbFake : ITodoData
    {
        private readonly List<Todo> todos;
        public TodoListDbFake()
        {
            todos = new List<Todo>()
            {
                new Todo(){ Id=1,
                            Title="Database update",
                            Text="Need to be done tomorrow!",
                            Date=DateTime.Now,
                            Completed=false,
                            Order=0,
                            Status="active"},
                new Todo(){ Id=2,
                            Title="Create todo",
                            Text="Very low pressure on it.",
                            Date=DateTime.Now,
                            Completed=false,
                            Order=1,
                            Status="active"},
                new Todo(){ Id=3,
                            Title="Create DATA",
                            Text="Make it forst",
                            Date=DateTime.Now,
                            Completed=true,
                            Order=2,
                            Status="completed"},

            };
        }
        public Task<Todo> AddTodo(Todo todo)
        {
            todos.Add(todo);
            return Task.FromResult(todo);
        }

        public Task<Todo> DeleteTodo(int id)
        {
            Todo deletedTodo=null;
            foreach (var todo in todos)
                if (todo.Id == id)
                {
                    deletedTodo = todo;
                    todos.Remove(todo);
                    break;
                }
            return Task.FromResult(deletedTodo);
        }

        public Task<Todo> EditTodo(int id, Todo todo)
        {
            var result = todos.Find(t => t.Id == id);
            if (result == null) return null;

            result.Title = todo.Title;
            result.Date = todo.Date;
            result.Text = todo.Text;

            return Task.FromResult(result);
        }

        public Task<Todo> GetTodo(int id)
        {
            return Task.FromResult(todos.Find(t=>t.Id==id));
        }

        public  Task<List<Todo>> GetTodos()
        {
            return  Task.FromResult(todos);
        }
    }
}
