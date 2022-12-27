using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace crud.Migrations
{
    public partial class MigrationTwo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "updateAt",
                table: "crud",
                newName: "UpdateAt");

            migrationBuilder.RenameColumn(
                name: "tastiness",
                table: "crud",
                newName: "Tastiness");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "crud",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "description",
                table: "crud",
                newName: "Description");

            migrationBuilder.RenameColumn(
                name: "createdAt",
                table: "crud",
                newName: "CreatedAt");

            migrationBuilder.RenameColumn(
                name: "chef",
                table: "crud",
                newName: "Chef");

            migrationBuilder.RenameColumn(
                name: "calories",
                table: "crud",
                newName: "Calories");

            migrationBuilder.RenameColumn(
                name: "dichId",
                table: "crud",
                newName: "DichId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UpdateAt",
                table: "crud",
                newName: "updateAt");

            migrationBuilder.RenameColumn(
                name: "Tastiness",
                table: "crud",
                newName: "tastiness");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "crud",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "crud",
                newName: "description");

            migrationBuilder.RenameColumn(
                name: "CreatedAt",
                table: "crud",
                newName: "createdAt");

            migrationBuilder.RenameColumn(
                name: "Chef",
                table: "crud",
                newName: "chef");

            migrationBuilder.RenameColumn(
                name: "Calories",
                table: "crud",
                newName: "calories");

            migrationBuilder.RenameColumn(
                name: "DichId",
                table: "crud",
                newName: "dichId");
        }
    }
}
