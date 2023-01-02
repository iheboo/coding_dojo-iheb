using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using OneToMany.Models;
using Microsoft.EntityFrameworkCore;

namespace OneToMany.Controllers;

public class HomeController : Controller
{
    private MyContext _context;
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger,MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    public IActionResult Index()
    {
        return View();
    }
    [HttpGet("Chefs")]
    public IActionResult Chefs()
    {
         List<Chef> AllChefs = _context.Chefs.OrderBy(p=>p.Year).ToList();
        return View("Chefs", AllChefs);
    }
   
    [HttpGet("create")] 
    public IActionResult Dishes()
    {
        ViewBag.AllChefs = _context.Chefs.OrderBy(p=>p.Year).ToList();
        List<Dishes>AllDishes=_context.Dishes.Include(c=>c.Creator).OrderBy(d=>d.Tastiness).ToList();
        return View("createDishes");
    }

    public IActionResult Privacy()
    {
        return View();
    }
    [HttpPost("CreateChef")]
    public IActionResult CreateChef(Chef Newchef)
    {
        if(ModelState.IsValid)
        {
            // Add
            _context.Add(Newchef);
            // Save
            _context.SaveChanges();
            return RedirectToAction("chef");
        }
        return View("Index");
    }
    [HttpPost]
    public IActionResult Create (Dishes newDishes)
    {
     if(ModelState.IsValid)
    {
        _context.Add(newDishes);
        _context.SaveChanges();
        return RedirectToAction("Dishes");
    }
    return View("CreateDishes");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
