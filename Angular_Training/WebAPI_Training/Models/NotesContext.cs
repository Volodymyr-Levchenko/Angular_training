using System.Data.Entity;

namespace WebAPI_Training.Models
{
    public class NotesContext : DbContext
    {
        public NotesContext()
            : base("NoteBookDB")
        {
            if (!Database.Exists())
            {
                Database.SetInitializer(
                    new MigrateDatabaseToLatestVersion<NotesContext, Migrations.Configuration>("NoteBookDB"));
            }
        }

        public DbSet<Note> Notes { get; set; }

        public DbSet<Category> Categories { get; set; }
    }
}