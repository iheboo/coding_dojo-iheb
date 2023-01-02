using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using LoginandRegistration.Models;
using Microsoft.AspNetCore.Identity;

namespace LoginandRegistration.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private MyContext _context;

    public HomeController(ILogger<HomeController> logger,MyContext context)
    {
        _logger = logger;
       _context = context;
    }

    public IActionResult Index()
    {
        return View();
    }
      [HttpGet("login")]
        public IActionResult Login()
        {

            return View();
        }
    [HttpGet("success")]
        public IActionResult Success()
        {
            if(HttpContext.Session.GetInt32("userId") == null)
                return RedirectToAction("Register");
            return View();
        }
         [HttpGet("logout")]
        public RedirectToActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Register");
        }
    public IActionResult Privacy()
    {
        return View();
    }
    // ************************************************************
    [HttpPost("create")]
    public IActionResult Create(User user)
    {
        if(ModelState.IsValid)
            {
                if(_context.Users.Any(p => p.Email == user.Email))
                {
                    ModelState.AddModelError("Email", "Email already in use");
                    return View("Index");
                }
                PasswordHasher<User> hasher = new PasswordHasher<User>();
                user.Password = hasher.HashPassword(user, user.Password);

                var newUser = _context.Users.Add(user).Entity;
                _context.SaveChanges();

                HttpContext.Session.SetInt32("userId", user.UserId);

                return RedirectToAction("Success");
        }
        return View("Index");
    }
     [HttpPost("login")]
        public IActionResult Login(LoginUser user,int UserId)
        {
            if(ModelState.IsValid)
            {
                LoginUser ? toLogin = _context.Users.FirstOrDefault(u => u.Email == user.logEmail)
                if(toLogin == null)
                {
                    ModelState.AddModelError("EmailAttempt", "Invalid Email/Password");
                    return View("Login");
                }
                PasswordHasher<LoginUser> hasher = new PasswordHasher<LoginUser>();
                var result = hasher.VerifyHashedPassword(user, toLogin.logPassword, user.logPassword);
                if(result == PasswordVerificationResult.Failed)
                {
                    ModelState.AddModelError("EmailAttempt", "Invalid Email/Password");
                    return View("Login");
                }
                // Log user into session
                HttpContext.Session.SetInt32("userId", toLogin.UserId);
                return RedirectToAction("Success");
            }
            return View("Login");
        }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
