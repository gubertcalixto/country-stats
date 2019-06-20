using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CountriesGo.Infrastructure.Migrations
{
    public partial class Added_ListaPaises_Entity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CountriesList",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CountryName = table.Column<string>(nullable: false),
                    CountryIso2 = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CountriesList", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CountriesList");
        }
    }
}
