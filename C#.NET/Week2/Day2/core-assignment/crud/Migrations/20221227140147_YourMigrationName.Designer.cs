// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using crud.Models;

#nullable disable

namespace crud.Migrations
{
    [DbContext(typeof(MyContext))]
    [Migration("20221227140147_YourMigrationName")]
    partial class YourMigrationName
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("crud.Models.Dich", b =>
                {
                    b.Property<int>("dichId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("calories")
                        .HasMaxLength(10)
                        .HasColumnType("int");

                    b.Property<string>("chef")
                        .IsRequired()
                        .HasMaxLength(45)
                        .HasColumnType("varchar(45)");

                    b.Property<string>("description")
                        .IsRequired()
                        .HasMaxLength(45)
                        .HasColumnType("varchar(45)");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasMaxLength(45)
                        .HasColumnType("varchar(45)");

                    b.Property<int>("tastiness")
                        .HasMaxLength(10)
                        .HasColumnType("int");

                    b.HasKey("dichId");

                    b.ToTable("CRUD");
                });
#pragma warning restore 612, 618
        }
    }
}
