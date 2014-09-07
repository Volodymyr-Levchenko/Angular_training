using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
using WebAPI_Training.Models;

namespace WebAPI_Training.DAL
{
    public class GenericRepository<TEntity> where TEntity:class
    {
        internal NoteModelContainer _container;
        internal DbSet<TEntity> _set;

        public GenericRepository(NoteModelContainer containerParam)
        {
            _container = containerParam;
            _set = _container.Set<TEntity>();
        }

        public virtual IEnumerable<TEntity> Get(
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            string includeProperties = "")
        {
            IQueryable<TEntity> query = _set;

            if (filter != null)
            {
                query = query.Where(filter);
            }

            foreach (var includeProperty in includeProperties.Split
                (new [] { ',' }, StringSplitOptions.RemoveEmptyEntries))
            {
                query = query.Include(includeProperty);
            }

            return orderBy != null ? orderBy(query).ToList() : query.ToList();
        }

        public virtual TEntity GetById(object id)
        {
            return _set.Find(id);
        }

        public virtual void Insert(TEntity entity)
        {
            _set.Add(entity);
        }

        public virtual void Delete(object id)
        {
            var entityToDelete = _set.Find(id);
            Delete(entityToDelete);
        }

        public virtual void Delete(TEntity entityToDelete)
        {
            if (_container.Entry(entityToDelete).State == EntityState.Detached)
            {
                _set.Attach(entityToDelete);
            }
            _set.Remove(entityToDelete);
        }

        public virtual void Update(TEntity entityToUpdate)
        {
            _set.Attach(entityToUpdate);
            _container.Entry(entityToUpdate).State = EntityState.Modified;
        }
    }
}