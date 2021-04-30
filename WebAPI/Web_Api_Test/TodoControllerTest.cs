using System;
using WebAPI.Controllers;
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
        public void GetTodosTest()
        {
            //Act
            var result = controller.GetTodos();
            int index = 0;
            foreach (var item in result.Value)
            {
                index++;
            }
            //Assert
            Assert.Equal(3, index);
        }
    }
}
