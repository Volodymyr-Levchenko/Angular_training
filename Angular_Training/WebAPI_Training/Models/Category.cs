using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI_Training.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string Name { get; set; }

        public List<Note> Notes { get; set; }
    }
}