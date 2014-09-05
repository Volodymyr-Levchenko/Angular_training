using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using WebAPI_Training.Models;

namespace WebAPI_Training.DAL
{
    public class CategoryRepository:IRepository<Category>
    {
        private NoteBookContext _bookContext;

        public CategoryRepository()
        {
            _bookContext =new NoteBookContext();
        }

        #region GET

        public IEnumerable<Category> GetAll()
        {
            return _bookContext.Categories.ToList();
        }

        public Category GetById(int id)
        {
            return _bookContext.Categories.Find(id);
        }

        #endregion

        #region CRUD

        public void Insert(Category catParam)
        {
            _bookContext.Categories.Add(catParam);
        }

        public void Remove(int id)
        {
            var catParam = GetById(id);
            _bookContext.Categories.Remove(catParam);
        }
        public void Update(Category item)
        {
            Remove(item.CategoryId);
            Insert(item);
        }

        public void Save()
        {
            _bookContext.SaveChanges();
        }

        #endregion

    }
}