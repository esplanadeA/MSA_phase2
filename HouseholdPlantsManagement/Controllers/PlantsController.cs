using HouseholdPlantsManagement.Models;
using HouseholdPlantsManagement.Repositories.Abstract; // Ensure this is the correct namespace
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace HouseholdPlantsManagement.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PlantController : ControllerBase
    {
        private readonly IPlantRepository _plantRepository;

        public PlantController(IPlantRepository plantRepository)
        {
            _plantRepository = plantRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<Plant>> GetPlants()
        {
            return await _plantRepository.GetAllPlantsAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Plant>> GetPlant(int id)
        {
            var plant = await _plantRepository.GetPlantByIdAsync(id);

            if (plant == null)
            {
                return NotFound();
            }

            return plant;
        }

        [HttpPost]
        public async Task<ActionResult<Plant>> AddPlant(Plant plant)
        {
            await _plantRepository.AddPlantAsync(plant);
            return CreatedAtAction(nameof(GetPlant), new { id = plant.Id }, plant);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePlant(int id, Plant plant)
        {
            if (id != plant.Id)
            {
                return BadRequest();
            }

            await _plantRepository.UpdatePlantAsync(plant);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePlant(int id)
        {
            await _plantRepository.DeletePlantAsync(id);
            return NoContent();
        }
    }
}
