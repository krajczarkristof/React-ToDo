using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.TodoData
{
    public class TodoContext : ITodoData
    {
        private readonly TodoDb _context;
        public TodoContext(TodoDb todoContext)
        {
            _context = todoContext;
        }

        public async Task<Todo> AddTodo(Todo todo)
        {
            _context.Todos.Add(todo);
            await _context.SaveChangesAsync();
            return todo;
        }

        public async Task<Todo> DeleteTodo(int id)
        {
            var todo =  _context.Todos.Find(id);
            if (todo == null)
            {
                return null;
            }

            _context.Todos.Remove(todo);
            await _context.SaveChangesAsync();
            return todo;
        }

        public async Task<Todo> EditTodo(int id,Todo todo)
        {
            todo.Id = id;

            _context.Entry(todo).State = EntityState.Modified;

            try
            {
                 await _context.SaveChangesAsync();
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

        public async Task<Todo> GetTodo(int id)
        {
            return await  _context.Todos.FindAsync(id);
        }

        public async Task<List<Todo>> GetTodos()
        {
            return  await _context.Todos.OrderBy(l => l.Order).ToListAsync();
        }

        private bool DCandidateExists(int id)
        {
            
            return _context.Todos.Any(e => e.Id == id);
        }
    }
}
