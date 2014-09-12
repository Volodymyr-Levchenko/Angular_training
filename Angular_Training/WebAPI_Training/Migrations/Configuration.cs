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

        protected override void Seed(Models.NotesContext context)
        {
            var work = new Category() {Name = "Work"};
            var home = new Category() {Name = "Home"};

            context.Categories.AddOrUpdate(c => c.Name, work, home);
            context.SaveChanges();
            context.Notes.Add(new Note { Header = "Note1", Text = "Lorem ipsum", Category = work });
            context.Notes.Add(new Note { Header = "Note2", Text = "Ipsum Lorem", Category = home });
        }
    }
}
