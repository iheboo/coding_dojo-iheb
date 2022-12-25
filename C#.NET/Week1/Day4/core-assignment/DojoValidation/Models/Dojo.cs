#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace DojoValidation.Models;
public class User
{
    [Required (ErrorMessage ="Name is required ❌❌❌") ]
    [MinLength(3)]
    public string Username { get; set; }
     [Required (ErrorMessage ="Location is required ❌❌❌")]
    [MinLength(3)]
    public string Location { get; set; }
     [Required (ErrorMessage ="Language is required ❌❌❌")]
    [MinLength(3)]
    public string Language { get; set; }
     [Required (ErrorMessage ="Comment  is required ❌❌❌")]
    [MinLength(3)]
    public string Comm { get; set; }
}