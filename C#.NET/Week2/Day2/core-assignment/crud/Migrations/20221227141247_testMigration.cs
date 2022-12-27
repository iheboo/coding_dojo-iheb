using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace crud.Migrations
{
    public partial class testMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_CRUD",
                table: "CRUD");

            migrationBuilder.RenameTable(
                name: "CRUD",
                newName: "crud");

            migrationBuilder.AddPrimaryKey(
                name: "PK_crud",
                table: "crud",
                column: "dichId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_crud",
                table: "crud");

            migrationBuilder.RenameTable(
                name: "crud",
                newName: "CRUD");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CRUD",
                table: "CRUD",
                column: "dichId");
        }
    }
}
