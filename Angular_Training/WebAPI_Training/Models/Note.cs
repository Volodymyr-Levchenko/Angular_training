using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI_Training.Models
{
    public class Note
    {
        public int NoteId { get; set; }
        public string Header { get; set; }
        public string Text { get; set; }

        public Category Category { get; set; }

    }
}