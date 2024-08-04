using Microsoft.EntityFrameworkCore;
using HouseholdPlantsManagement.Models;

namespace HouseholdPlantsManagement.Context
{
    public class PlantContext : DbContext
    {
        public PlantContext(DbContextOptions<PlantContext> options) : base(options)
        {
        }

        public DbSet<Plant> Plants { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Plant>().HasData(
                new Plant
                {
                    Id = 1,
                    Name = "Fiddle Leaf Fig",
                    Species = "Ficus lyrata",
                    PurchaseDate = new DateTime(2023, 1, 15),
                    ImageUrl = "http://example.com/fiddle-leaf-fig.jpg",
                    WateringInterval = 7,
                    FertilizingInterval = 30,
                    Notes = "Needs bright, indirect light.",
                    LastWatered = new DateTime(2024, 8, 1),
                    LastFertilized = new DateTime(2024, 7, 15)
                },
                new Plant
                {
                    Id = 2,
                    Name = "Snake Plant",
                    Species = "Sansevieria trifasciata",
                    PurchaseDate = new DateTime(2023, 3, 10),
                    ImageUrl = "http://example.com/snake-plant.jpg",
                    WateringInterval = 14,
                    FertilizingInterval = 60,
                    Notes = "Very low maintenance.",
                    LastWatered = new DateTime(2024, 8, 2),
                    LastFertilized = new DateTime(2024, 6, 10)
                }
            );
        }
    }
}
