
using System.ComponentModel.DataAnnotations;

namespace LoginandRegistration.Models;

  public class LoginUser
    {
        [EmailAddress]
        [Required]
        [Display(Name="Email")]
        public string logEmail {get;set;}
        [DataType(DataType.Password)]
        [Display(Name="Password")]
        public string logPassword {get;set;}
    }