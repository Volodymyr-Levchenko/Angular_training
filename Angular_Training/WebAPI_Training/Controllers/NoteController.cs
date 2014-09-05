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
        static readonly NoteRepository _repo = new NoteRepository();

        #region GET
        [HttpGet]
        public IEnumerable<Note> GetALl()
        {
            return _repo.GetAll();
        }

        [HttpGet]
        public Note GetNote(int id)
        {
            return _repo.GetById(id);
        }
        #endregion



    }
}
