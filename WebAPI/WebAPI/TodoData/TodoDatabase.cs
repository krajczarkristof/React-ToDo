using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.TodoData
{
    public class TodoDatabase : ITodoData
    {
        private readonly TodoDbContext _context;
        public TodoDatabase(TodoDbContext todoContext)
        {
            _context = todoContext;
        }

        public  Todo AddTodo(Todo todo)
        {
            _context.Todos.Add(todo);
            _context.SaveChanges();
            return todo;
        }

        public  Todo DeleteTodo(int id)
        {
            var todo =  _context.Todos.Find(id);
            if (todo == null)
            {
                return null;
            }

            _context.Todos.Remove(todo);
             _context.SaveChanges();
            return todo;
        }

        public  Todo EditTodo(int id,Todo todo)
        {
            todo.Id = id;

            _context.Entry(todo).State = EntityState.Modified;

            try
            {
                 _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DCandidateExists(id))
                {
                    return null;
                }
                else
                {
                    throw;
                }
            }

            return todo;
        }

        public  Todo GetTodo(int id)
        {
            return  _context.Todos.Find(id);
        }

        public  List<Todo> GetTodos()
        {
            return  _context.Todos.OrderBy(l => l.Order).ToList();
        }

        private bool DCandidateExists(int id)
        {
            
            return _context.Todos.Any(e => e.Id == id);
        }
    }
}
