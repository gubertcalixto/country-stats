using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CountriesGo.Infrastructure.Migrations
{
    public partial class More_Properties_Country_Entity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "LastTimeUpdated",
                table: "Paises",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AlterColumn<string>(
                name: "FrequenciaValor",
                table: "EletricidadeFrequencia",
                nullable: true,
                oldClrType: typeof(int));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LastTimeUpdated",
                table: "Paises");

            migrationBuilder.AlterColumn<int>(
                name: "FrequenciaValor",
                table: "EletricidadeFrequencia",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
