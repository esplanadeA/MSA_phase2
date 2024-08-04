using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace HouseholdPlantsManagement.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Plants",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Species = table.Column<string>(type: "TEXT", nullable: false),
                    PurchaseDate = table.Column<DateTime>(type: "TEXT", nullable: false),
                    ImageUrl = table.Column<string>(type: "TEXT", nullable: false),
                    WateringInterval = table.Column<int>(type: "INTEGER", nullable: false),
                    FertilizingInterval = table.Column<int>(type: "INTEGER", nullable: false),
                    Notes = table.Column<string>(type: "TEXT", nullable: false),
                    LastWatered = table.Column<DateTime>(type: "TEXT", nullable: false),
                    LastFertilized = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Plants", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Plants",
                columns: new[] { "Id", "FertilizingInterval", "ImageUrl", "LastFertilized", "LastWatered", "Name", "Notes", "PurchaseDate", "Species", "WateringInterval" },
                values: new object[,]
                {
                    { 1, 30, "http://example.com/fiddle-leaf-fig.jpg", new DateTime(2024, 7, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2024, 8, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Fiddle Leaf Fig", "Needs bright, indirect light.", new DateTime(2023, 1, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Ficus lyrata", 7 },
                    { 2, 60, "http://example.com/snake-plant.jpg", new DateTime(2024, 6, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2024, 8, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), "Snake Plant", "Very low maintenance.", new DateTime(2023, 3, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), "Sansevieria trifasciata", 14 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Plants");
        }
    }
}
