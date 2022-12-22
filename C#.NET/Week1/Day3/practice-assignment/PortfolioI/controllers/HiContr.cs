using Microsoft.AspNetCore.Mvc;
namespace PortfolioI.Controllers;
public class HiContr : Controller
{

    [HttpGet]
    [Route("")]
    // public string Index()
    // {
    //     return "This is my index!";
    // }
     public IActionResult Index()
    {
        return View();
    }

    [HttpGet]
    [Route("/projects")]

    // public string Projects()
    // {
    //     return "These are my projects!";
    // }
        public IActionResult Project()
    {
        return View();
    }

    [HttpGet]
    [Route("/contact")]
    // public string Contact()
    // {
    //     return "This is my contact!";
    // }
        public IActionResult Contact()
    {
        return View();
    }
}