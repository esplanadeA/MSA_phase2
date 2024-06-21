using Microsoft.EntityFrameworkCore;

namespace HouseholdPlantsManagement.Models
{
    public class PlantsContext : DbContext
    {
        public PlantsContext(DbContextOptions<PlantsContext> options) : base(options) { }

        public DbSet<Plant> Plants { get; set; }
        // Add DbSet for other models if needed

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure entity relationships, etc., if needed
        }
    }
}
