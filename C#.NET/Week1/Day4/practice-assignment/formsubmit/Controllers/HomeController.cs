using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using formsubmit.Models;

namespace formsubmit.Controllers;

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

     [HttpGet("success")]
    public IActionResult Success(Survey yourSurvey)
    {
        return View(yourSurvey);
    }

    [HttpPost("survey")]
    public IActionResult Submission(Survey yourSurvey)
{
    Survey yourSurvey = new Survey(){
        FirstName=FirstName,
        Locatio=Locatio,
        Language=Language,
        Comm=Comm
    };
    return RedirectToAction ("seccess",yourSurvey)
    // Handle your form submission here
}
}
