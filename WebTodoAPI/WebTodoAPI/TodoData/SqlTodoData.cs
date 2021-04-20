using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebTodoAPI.TodoData;

namespace WebTodoAPI.Models
{
    public class SqlTodoData : ITodoData
    {
        private TodoContext _todoContext;
        public SqlTodoData(TodoContext todoContext)
        {
            _todoContext = todoContext;
        }
        public Todo AddTodo(Todo todo)
        {
            todo.Id = Guid.NewGuid();
            _todoContext.SaveChanges();
            _todoContext.Todos.Add(todo);
            return todo;
        }

        public void DeleteTodo(Todo todo)
        {

            _todoContext.Todos.Remove(todo);
            _todoContext.SaveChanges();
        }

        public Todo EditTodo(Todo todo)
        {
            var existingTodo = _todoContext.Todos.Find(todo.Id);

            if (existingTodo != null)
            {
                _todoContext.Todos.Update(todo);
                _todoContext.SaveChanges();
            }
            return todo;
        }

        public Todo GetTodo(Guid id)
        {
            var todo = _todoContext.Todos.Find(id);
            return todo;
        }

        public List<Todo> GetTodos()
        {
            return _todoContext.Todos.ToList();
        }
    }
}
