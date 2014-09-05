using System.Collections.Generic;

namespace WebAPI_Training.DAL
{
    interface IRepository<T>
    {
        #region GET

        IEnumerable<T> GetAll();

        T GetById(int id);

        #endregion

        #region CRUD

        void Insert(T tParam);

        void Update(T tParam);

        void Remove(int id);

        void Save();

        #endregion
    }
}
