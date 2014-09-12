using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebAPI_Training.Models
{
    public class NotesContext : DbContext
    {
        public NotesContext()
            : base("name=NoteBookDB")
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<NotesContext, WebAPI_Training.Migrations.Configuration>("name=NoteBookDB"));
        }

        public DbSet<Note> Notes { get; set; }
        public DbSet<Category> Categories { get; set; }
        

    }
}