using System.Collections.Generic;

namespace ChaosEmeraldsOfIncome.Controllers
{
    public class MockNoteRepo : INoteRepo
    {
        public void AddNote(Note newNote)
        {
            throw new System.NotImplementedException();
        }

        public Note GetNoteById(int id)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Note> GetNotesByIncomeId(int userId, int incomeId)
        {
            throw new System.NotImplementedException();
        }
    }
}