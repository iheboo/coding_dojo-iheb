using Microsoft.AspNetCore.Mvc;
using ViewModelFun.Models;

namespace ViewModelFun.Controllers
{
    public class HomeController : Controller
    {
        public List<User> GenerateUsers()
        {
            return new List<User>()
            {
                new User(){ FirstName="Mousa", LastName="koki"},
                new User(){ FirstName="hsine", LastName="Taha"},
                new User(){ FirstName="Salma", LastName="Mkl"},
                new User(){ FirstName="Bilal", LastName="Reas"},
            };
        }
        // GET: /Home/
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            string stringModel = "My message is hard work ";

            return View("Index", stringModel);
        }
        [HttpGet("numbers")]
        public IActionResult Numbers()
        {
            int[] numbers = new int[]{1,2,3,4,6,-13,100,-2};
            return View(numbers);
        }
        [HttpGet("users")]
        public IActionResult AllUsers()
        {
            var users = GenerateUsers();
            return View(users);
        }
        [HttpGet("user")]
        public IActionResult OneUser()
        {
            var rand = new Random();
            var users = GenerateUsers();

            // grab random user (could just create one, grab first, etc...)
            var user = users[rand.Next(users.Count)];
            return View(user);
        }
    }
}