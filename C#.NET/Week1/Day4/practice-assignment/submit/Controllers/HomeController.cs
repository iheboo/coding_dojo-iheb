using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using submit.Models;

namespace submit.Controllers;

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
        [HttpGet("New")]
          public IActionResult New (User NewUser)
    {
        return View(NewUser);
    }
    [HttpPost("user")]
    public IActionResult Create(User NewUser)
    {
    if(ModelState.IsValid)
    {
        
        return RedirectToAction("New",NewUser);
    }
    else
    {
       
        return View("create");
    }
}
}
