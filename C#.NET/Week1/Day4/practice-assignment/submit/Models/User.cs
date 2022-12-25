#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace submit.Models;

public class User
{
    // Class definition
    [Required(ErrorMessage ="Username is required ❌❌❌")]
    [MinLength(3)]
    public string Username { get; set; }
 
   [Required(ErrorMessage ="Email is required ❌❌❌")]
    [EmailAddress]
    public string Email { get; set; }
 
   [Required(ErrorMessage ="Password is required ❌❌❌")]
    [DataType(DataType.Password)]
    public string Password { get; set; }
}