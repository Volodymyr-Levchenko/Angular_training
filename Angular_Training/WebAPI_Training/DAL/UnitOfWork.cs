﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebAPI_Training.Models;

namespace WebAPI_Training.DAL
{
    public class UnitOfWork:IDisposable
    {
        private NotesContext _container;
        private GenericRepository<Note> noteRepository;
        private GenericRepository<Category> categoryRepository;

        public GenericRepository<Note> NoteRepository
        {
            get { return noteRepository ?? new GenericRepository<Note>(_container); }
        }

        public GenericRepository<Category> CategoryRepository
        {
            get { return categoryRepository ?? new GenericRepository<Category>(_container); }
        }

        public void Save()
        {
            _container.SaveChanges();
        }

        private bool disposed;

        protected virtual void Dispose(bool disposing)
        {
            if (!disposed)
            {
                if (disposing)
                {
                    _container.Dispose();
                }
            }
            disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}