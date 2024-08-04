using HouseholdPlantsManagement.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace HouseholdPlantsManagement.Repositories.Abstract
{
    public interface IPlantRepository
    {
        Task<IEnumerable<Plant>> GetAllPlantsAsync();
        Task<Plant?> GetPlantByIdAsync(int id);
        Task AddPlantAsync(Plant plant);
        Task UpdatePlantAsync(Plant plant);
        Task DeletePlantAsync(int id);
        Task<bool> PlantExistsAsync(int id);
    }
}
