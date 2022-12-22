using Microsoft.AspNetCore.Mvc;



public class HomeController : Controller
{
    [HttpGet]
    [Route("")]
    public ViewResult Index()

    {
        DateTime CurrentTime = DateTime.Now;
        ViewBag.CurrentTime = DateTime.Now;
        return View("Index");
    }

}