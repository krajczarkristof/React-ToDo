using System;
using WebAPI.Controllers;
using WebAPI.Models;
using WebAPI.TodoData;
using Xunit;

namespace Web_Api_Test
{
    public class TodoControllerTest
    {
        private readonly ITodoData service;
        private readonly TodoController controller;
        public TodoControllerTest()
        {
            service = new TodoListDbFake();
            controller = new TodoController(service);
        }
        [Fact]
        public async void GetTodoTest()
        {
            //Act
            var todo = new Todo(){
                                Id = 4,
                                Title = "Most hozzaad",
                                Text = "Teszteljük",
                                Date = DateTime.Now,
                                Completed = false,
                                Order = 3,
                                Status = "active" };
            await controller.PostDTodo(todo);
            var getTodo = await controller.GetTodo(4);
            //Assert
            Assert.NotNull(getTodo);

        }
        [Fact]
        public async void PutTodoTest()
        {
            //Act
            var todo = new Todo(){
                                    Id = 5,
                                    Title = "",
                                    Text = "",
                                    Completed = false,
                                    Order = 4,
                                    Status = "active"};

            await controller.PostDTodo(todo);
            var deadLine = DateTime.Now;
            var newTodo = new Todo(){
                                    Id = 5,
                                    Title = "test",
                                    Text = "testdata",
                                    Date=deadLine,
                                    Completed = false,
                                    Order = 4,
                                    Status = "active" };
            var updatedTodo = await controller.PutTodo(todo.Id, newTodo);
            //Assert
            Assert.Equal("test", updatedTodo.Value.Title);
            Assert.Equal("testdata", updatedTodo.Value.Text);
            Assert.Equal(deadLine, updatedTodo.Value.Date);

        }
    }
}
