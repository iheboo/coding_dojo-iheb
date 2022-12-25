using Microsoft.AspNetCore.Mvc;
namespace DojoControllers.Controllers;
public class DojoControllers : Controller
{
    [HttpGet]
    [Route("")]
    public ViewResult Index()
    {
        return View("Index");
    }
    [HttpPost]
    [Route("form")]
    public ViewResult Form (string name, string location, string language, string contx)
    {

        ViewBag.name =name;
        ViewBag.location =location;
        ViewBag.language =language;
        ViewBag.contx =contx;
        return View("Result");
    }

    [HttpGet]
    [Route("/result")]
    public  ViewResult result()
    {
        return View ("Result");
    }
}
