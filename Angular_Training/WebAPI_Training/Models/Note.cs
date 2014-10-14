using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace WebAPI_Training.Models
{
    [Table("tbl_note")]
    public class Note
    {
        [Key]
        public int NoteId { get; set; }
        public string Header { get; set; }
        public string Text { get; set; }

        public int CategoryId { get; set; }

        [JsonIgnore]
        [ForeignKey("CategoryId")]
        public virtual Category Category { get; set; }

    }
}