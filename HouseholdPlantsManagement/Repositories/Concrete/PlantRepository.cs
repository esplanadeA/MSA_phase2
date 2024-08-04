using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HouseholdPlantsManagement.Models;
using Microsoft.EntityFrameworkCore;

namespace HouseholdPlantsManagement.Repositories
{
    public class PlantRepository : IPlantRepository
    {
        private readonly PlantContext _context;

        public PlantRepository(PlantContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Plant>> GetAllPlantsAsync()
        {
            return await _context.Plants.ToListAsync();
        }

        public async Task<Plant> GetPlantByIdAsync(int id)
        {
            return await _context.Plants.FindAsync(id);
        }

        public async Task AddPlantAsync(Plant plant)
        {
            _context.Plants.Add(plant);
            await _context.SaveChangesAsync();
        }

        public async Task UpdatePlantAsync(Plant plant)
        {
            _context.Entry(plant).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeletePlantAsync(int id)
        {
            var plant = await _context.Plants.FindAsync(id);
            if (plant != null)
            {
                _context.Plants.Remove(plant);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<bool> PlantExistsAsync(int id)
        {
            return await _context.Plants.AnyAsync(e => e.Id == id);
        }
    }
}
