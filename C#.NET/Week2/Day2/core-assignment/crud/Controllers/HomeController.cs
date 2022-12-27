using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using crud.Models;

namespace crud.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private MyContext _context;

    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
        _context = context;
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View(_context.crud.OrderByDescending
        (c=>c.CreatedAt));
    }
    [HttpGet("new")]
    public IActionResult New() => View();

    public IActionResult Privacy()
    {
        return View();
    }
    [HttpGet("{DishId}")]
    public IActionResult Show (int DishId)
    {
        Dich ? model =_context.crud.FirstOrDefault(d=>d.DichId == DishId);
        if(model==null)
            return RedirectToAction("Index");
        return View (model);
    }
    [HttpGet("edit/{DishId}")]
    public IActionResult Edit (int DishId )
    {
         Dich ? model =_context.crud.FirstOrDefault(d=>d.DichId == DishId);
         if(model==null)
            return RedirectToAction("Edit");
        return View (model);
    }
    // *********************************************************post 
    [HttpPost ("Create")]
    public IActionResult Create(Dich newdich)
    {
        if(ModelState.IsValid)
        {
            _context.crud.Add(newdich);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
        return View("New");
    }
    [HttpPost("{DishId}/update")]
    public IActionResult Update (Dich updich,int DishId)
    {
         Dich ? toUpdate =_context.crud.FirstOrDefault(d=>d.DichId == updich.DichId);
          if(ModelState.IsValid)
        {
                toUpdate.Name = updich.Name;
                toUpdate.Chef = updich.Chef;
                toUpdate.Tastiness = updich.Tastiness;
                toUpdate.Calories = updich.Calories;
                toUpdate.Description = updich.Description;
                toUpdate.UpdateAt = DateTime.Now;
                _context.SaveChanges();
                return RedirectToAction ("Show");
        }
        return View("Edit",updich);
    }
    [HttpGet("{dishId}/delete")]
        public IActionResult Delete(int dishId)
        {
            Dich  ? toDelete =_context.crud.FirstOrDefault(d=>d.DichId == dishId);
            if(toDelete == null)
                return RedirectToAction("Index");
            _context.crud.Remove(toDelete);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
