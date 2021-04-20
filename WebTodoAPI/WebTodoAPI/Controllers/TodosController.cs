using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebTodoAPI.Models;
using WebTodoAPI.TodoData;

namespace WebTodoAPI.Controllers
{

    
    [ApiController]
    public class TodosController : ControllerBase
    {
        private ITodoData _todoData;
        public TodosController(ITodoData todoData)
        {
            _todoData = todoData;
        }

        [HttpGet]
        [Route("api/[controller]")]
        public IActionResult GetTodos()
        {
            return Ok(_todoData.GetTodos());
        }


        [HttpGet]
        [Route("api/[controller]/{id}")]
        public IActionResult GetTodo(Guid id)
        {
            var todo = _todoData.GetTodo(id);
            if (todo != null)
            {
                return Ok(todo);
            }
            return NotFound($"Todo with Id:{id} was not found!");
        }
        [HttpPost]
        [Route("api/[controller]")]
        public IActionResult PostTodo(Todo todo)
        {
            _todoData.AddTodo(todo);
            return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Path + "/" + todo.Id, todo);
        }

        [HttpDelete]
        [Route("api/[controller]/{id}")]
        public IActionResult DeleteTodo(Guid id)
        {
            var todo = _todoData.GetTodo(id);
            if (todo != null)
            {
                _todoData.DeleteTodo(todo);
                return Ok();
            }
            return NotFound($"Todo with Id:{id} was not found!");
        }

        [HttpPatch]
        [Route("api/[controller]/{id}")]
        public IActionResult PatchTodo(Guid id, Todo todo)
        {
            var existingTodo = _todoData.GetTodo(id);
            if (existingTodo != null)
            {
                todo.Id = existingTodo.Id;
                _todoData.EditTodo(todo);
                return Ok();
            }
            return NotFound($"Todo with Id:{id} was not found!");
        }

    }
}
