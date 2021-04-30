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
        public Todo AddTodo(Todo todo)
        {
            throw new NotImplementedException();
        }

        public Todo DeleteTodo(int id)
        {
            throw new NotImplementedException();
        }

        public Todo EditTodo(int id, Todo todo)
        {
            throw new NotImplementedException();
        }

        public Todo GetTodo(int id)
        {
            throw new NotImplementedException();
        }

        public List<Todo> GetTodos()
        {
            return todos;
        }
    }
}
