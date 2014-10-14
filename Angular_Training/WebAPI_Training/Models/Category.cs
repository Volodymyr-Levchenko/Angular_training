using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace WebAPI_Training.Models
{
    [Table("tbl_category")]
    public class Category
    {
        [Key]
        public int CategoryId { get; set; }
        public string Name { get; set; }

        [JsonIgnore]
        public virtual List<Note> Notes { get; set; }
    }
}