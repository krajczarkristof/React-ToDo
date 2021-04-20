using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Todo
    {
        [Key]
        public Guid Id { get; set; }

        [MaxLength(300,ErrorMessage ="Text can only be 300 character")]
        public string Text { get; set; }

        public DateTime Date { get; set; }

        public bool Completed { get; set; }

        [MaxLength(50, ErrorMessage = "Text can only be 50 character")]
        public string Status { get; set; }
    }
}
