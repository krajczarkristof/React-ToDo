using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class TodoDb:DbContext
    {
        public TodoDb(DbContextOptions<TodoDb> options) :base(options)
        {

        }

        public DbSet<Todo> Todos { get; set; }
    }
}
