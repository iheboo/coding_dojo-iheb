#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace crud.Models;

public class Dich 

{
    [Key]
    public int DichId {get;set;}

    [Display(Name="Chef's Name")]
    [Required]
    [MaxLength(45)]
    public string Chef  {get;set;}

    [Display(Name="Name of Dish")]
    [Required]
    [MaxLength(45)]
    public string Name  {get;set;}

    [Display(Name="#Calories")]
    [Required]
    [Range(1,Int32.MaxValue ,ErrorMessage="Calories must be 1 or more")]
    public int Calories  {get;set;}

    [Display(Name="#Tastiness")]
    [Required]
    [Range(1,5)]
    public int Tastiness  {get;set;} =1;

    [Display(Name="Description")]
    [Required]
    [MaxLength(45)]
    public string Description  {get;set;}

    public DateTime CreatedAt {get;set;}=DateTime.Now ;
    public DateTime UpdateAt {get;set;}=DateTime.Now;

}