 using System.ComponentModel.DataAnnotations;
 #pragma warning disable CS8618
 namespace OneToMany.Models;
 public class Chef 
 {
    [Key]
    public int ChefId {get;set;}
    [Display(Name="FristName")]
    [Required]
    public string FristName {get;set;}
   [Display(Name="LastName")]
    [Required]
    public string LastName {get;set;}
   [Display(Name="AGE")]
    [Required]
    public int Year {get;set;}
   public List<Dishes> CreatedDish { get; set; } = new List<Dishes>(); 
    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;

 }