using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Todo
    {
        [Key]
        public int id { get; set; }

        [Column(TypeName = "nvarchar(300)")]
        public string Text { get; set; }

        public DateTime Date { get; set; }

        public bool Completed { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Status { get; set; }

    }
}
