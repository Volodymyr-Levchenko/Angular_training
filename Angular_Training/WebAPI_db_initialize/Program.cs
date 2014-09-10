using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebAPI_Training.Models;

namespace WebAPI_db_initialize
{
    class Program
    {
        static void Main(string[] args)
        {
            NoteModelContainer _container = new NoteModelContainer();
            
            
            var query = from b in _container.CategorySet
                orderby b.Name
                select b;
            foreach (var category in query)
            {
                Console.WriteLine(category.Name);
            }
            Console.ReadKey();
        }
    }
}
