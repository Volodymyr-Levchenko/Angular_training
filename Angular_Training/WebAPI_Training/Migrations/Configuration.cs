using System.Linq;
using WebAPI_Training.Models;

namespace WebAPI_Training.Migrations
{
    using System.Data.Entity.Migrations;
    

    internal sealed class Configuration : DbMigrationsConfiguration<Models.NotesContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(NotesContext context)
        {
            //in case of Seed method go hurka-durka
            //if (System.Diagnostics.Debugger.IsAttached == false)
            //    System.Diagnostics.Debugger.Launch();
            
            context.Categories.AddOrUpdate(c => c.Name, new Category { Name = "Work" });
            context.Categories.AddOrUpdate(c => c.Name, new Category { Name = "Home" });
            context.SaveChanges();

            
            context.Notes.AddOrUpdate(n => n.Header, new Note
            {
                Header = "Note1",
                Text = "Lorem ipsum",
                CategoryId = context.Categories.FirstOrDefault(c => c.Name == "Work").CategoryId
            });

            context.Notes.AddOrUpdate(n => n.Header, new Note
            {
                Header = "Note2",
                Text = "Ipsum Lorem",
                CategoryId = context.Categories.FirstOrDefault(c => c.Name == "Home").CategoryId
            });
            context.SaveChanges();
        }
    }
}
