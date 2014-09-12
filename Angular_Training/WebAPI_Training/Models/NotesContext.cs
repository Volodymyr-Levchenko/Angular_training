using System.Data.Entity;

namespace WebAPI_Training.Models
{
    public class NotesContext : DbContext
    {
        public NotesContext()
            : base("name=NoteBookDB")
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<NotesContext, Migrations.Configuration>("name=NoteBookDB"));
        }

        public DbSet<Note> Notes { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}