using Microsoft.AspNetCore.Mvc;
namespace DojoSurvey.Controllres;
public class DojoContr : Controller
{
    [HttpPost]
    [Route("")]
     public string Index(  string Name, string location ,string language,string contx)
    {
        ViewBag.Name =Name;
        ViewBag.location =location;
        ViewBag.language =language;
        ViewBag.contx =contx;
        b NewUser = new b(){
            Name=Name,
            location=location,
            language=language,
            contx=contx
        };

        return RedirectToAction("result",NewUser);
    }

    [HttpGet]
    [Route("/result")]
     public IActionResult Result(b NewUser)
    {
        return View(NewUser);
    }
}