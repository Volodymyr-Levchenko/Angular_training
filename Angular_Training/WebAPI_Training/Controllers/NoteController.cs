using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI_Training.DAL;
using WebAPI_Training.Models;

namespace WebAPI_Training.Controllers
{
    public class NoteController : ApiController
    {
        private UnitOfWork _unit = new UnitOfWork();

        [Route("api/notes/")]
        [HttpGet]
        public IEnumerable<Note> GetAllNotes()
        {
            return _unit.NoteRepository.Get();
        }

        [Route("api/categories/")]
        [HttpGet]
        public IEnumerable<Category> GetAllCategories()
        {
            return _unit.CategoryRepository.Get();
        }

        [Route("api/notes/{CategoryName:string}/")]
        [HttpGet]
        public IEnumerable<Note> GetNotesByCategory(string CategoryName)
        {
            return _unit.NoteRepository.Get(n => n.Category.Name == CategoryName);
        }

        [Route("api/notes/{id:int")]
        [HttpGet]
        public Note GetNoteById(int id)
        {
            return _unit.NoteRepository.GetById(id);
        }

        [Route("api/notes/new")]
        [HttpPost]
        public void AddNote(Note newNote)
        {
            _unit.NoteRepository.Insert(newNote);
            _unit.Save();
        }

        [Route("api/notes/{id:int}/edit")]
        [HttpPut]
        public void UpdateNote(int id)
        {
            var updatedNote = _unit.NoteRepository.GetById(id);
            _unit.NoteRepository.Update(updatedNote);
            _unit.Save();
        }

        [Route("api/notes/{id:int}/delete")]
        [HttpDelete]
        public void DeleteNote(int id)
        {
            _unit.NoteRepository.Delete(id);
            _unit.Save();
        }
    }
}
