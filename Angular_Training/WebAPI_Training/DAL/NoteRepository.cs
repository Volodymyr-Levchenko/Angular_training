using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebAPI_Training.Models;

namespace WebAPI_Training.DAL
{
    public class NoteRepository:IRepository<Note>
    {
        private NoteBookContext _bookContext;

        public NoteRepository()
        {
            _bookContext = new NoteBookContext();
        }
        #region GET
        public IEnumerable<Note> GetAll()
        {
            return _bookContext.Notes.ToList();
        }

        public Note GetById(int id)
        {
            return _bookContext.Notes.Find(id);
        }
        #endregion

        #region CRUD

        public void Insert(Note tParam)
        {
            _bookContext.Notes.Add(tParam);
        }

        public void Update(Note tParam)
        {
            Remove(tParam.NoteId);
            Insert(tParam);
        }

        public void Remove(int id)
        {
            var noteParam = GetById(id);
            _bookContext.Notes.Remove(noteParam);
        }

        public void Save()
        {
            _bookContext.SaveChanges();
        }
        #endregion
    }
}