using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Random.Models;

namespace Random.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index( passcode NewCode)
    {
        return View(NewCode);
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
    [HttpPost("generate")]
    public IActionResult Generate (passcode NewCode)
    {
        return RedirectToAction ("Index",NewCode);
    }
}
