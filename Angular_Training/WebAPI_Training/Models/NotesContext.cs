using System.Data.Entity;

namespace WebAPI_Training.Models
{
    public class NotesContext : DbContext
    {
        public NotesContext()
            : base("NoteBookDB")
        {
        }

        public DbSet<Note> Notes { get; set; }

        public DbSet<Category> Categories { get; set; }
    }
}