using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;
using WebAPI.TodoData;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly ITodoData  _todoData;
        public TodoController(ITodoData todoData)
        {
            _todoData = todoData;
        }
        // GET: api/Todo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Todo>>> GetTodos()
        {

            return await _todoData.GetTodos();
        }

        // GET: api/Todo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Todo>> GetTodo(int id)
        {
            return await _todoData.GetTodo(id);
        }

        // PUT: api/Todo/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Todo>> PutTodo(int id, Todo todo)
        {
            var updatedtodo = await _todoData.EditTodo(id, todo);

            if (updatedtodo != null)
            {
                return updatedtodo;
                
            }

            return NotFound();

        }

        // POST: api/Todo
        [HttpPost]
        public async Task<ActionResult<Todo>> PostDTodo(Todo todo)
        {
            var newTodo = await _todoData.AddTodo(todo);

            return CreatedAtAction("GetTodo", new { id = newTodo.Id }, newTodo);
        }

        // DELETE: api/Todo/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Todo>> DeleteTodo(int id)
        {
            var todo = await _todoData.DeleteTodo(id);
            if (todo==null)
            {
                return NotFound();
            }
            return todo;
        }


    }
}
