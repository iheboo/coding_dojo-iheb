using System.ComponentModel.DataAnnotations;
 #pragma warning disable CS8618
using System;
namespace OneToMany.Models

{

    public class Dishes

    {

        [Key]

        public int DishId {get;set;}

        [Display(Name="Name of Dish")]

        [Required]

        public string Name {get;set;}

        [Display(Name="Chef's Name")]

        [Required]

         public int ChefId {get;set;}

        [Required]

        [Range(1,5)]

        public int Tastiness {get;set;}

        [Range(1,Int32.MaxValue,ErrorMessage="Calories must be 1 or larger")]

        public int Calories {get;set;}

        public string Description {get;set;}

        public DateTime CreatedAt {get;set;} = DateTime.Now;

        public DateTime UpdatedAt {get;set;} = DateTime.Now;
        public Chef ? Creator { get; set; }

    }

}