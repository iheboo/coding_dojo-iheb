using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using DojoValidation.Models;

namespace DojoValidation.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }


     [HttpGet("Show")]
    public IActionResult Show(User NewUser)
    {
        return View(NewUser);
    }
     [HttpPost("form")]
      public IActionResult Form(User NewUser)
    {
         if(ModelState.IsValid){
            return RedirectToAction("Show", NewUser);
        }
         return View("Form");
    }
}
