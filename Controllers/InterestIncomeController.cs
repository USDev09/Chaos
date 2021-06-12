using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace ChaosEmeraldsOfIncome.Controllers
{
    [ApiController]
    [Route("api/interestIncome")]
    public class InterestIncomeController : ControllerBase
    {
        private readonly IInterestIncomeRepo _repo;

        public InterestIncomeController(IInterestIncomeRepo repo)
        {
            _repo = repo;       
        }

        [HttpGet]
        public ActionResult<InterestIncome> GetInterestIncome()
        {
            var interestIncome = _repo.GetAllInterestIncome();

            return Ok(interestIncome);
        }
    }
}