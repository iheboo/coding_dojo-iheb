using Microsoft.AspNetCore.Mvc;
namespace Razor.Controllers;

public class RazorContr : Controller
{


    [HttpGet]
    [Route("")]
    public ViewResult index()
    {
        return View();
    }
}
