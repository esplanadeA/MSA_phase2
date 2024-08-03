using Microsoft.EntityFrameworkCore;
using HouseholdPlantsManagement.Models;

public class PlantContext : DbContext
{
    public PlantContext(DbContextOptions<PlantContext> options)
        : base(options)
    {
    }

    public DbSet<Plant> Plants { get; set; } = default!;
}
