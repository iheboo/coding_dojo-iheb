#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
namespace crud.Models;
public class MyContext : DbContext 
{ 
    public MyContext(DbContextOptions options) : base(options) { }
    // the "crud" table name will come from the DbSet property name
    public DbSet<Dich> crud { get; set; } 
}