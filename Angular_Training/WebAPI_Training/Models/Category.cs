using System.Collections.Generic;

namespace WebAPI_Training.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string Name { get; set; }

        public List<Note> Notes { get; set; }
    }
}