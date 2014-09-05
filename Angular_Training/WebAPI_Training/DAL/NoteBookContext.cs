using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using WebAPI_Training.Models;


namespace WebAPI_Training.DAL
{
    public class NoteBookContext : DbContext
    {
        public NoteBookContext() : base("NoteBookContext")
        {
        }
        public DbSet<Note> Notes { get; set; }
        public DbSet<Category> Categories { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}