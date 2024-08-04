namespace HouseholdPlantsManagement.Models
{
    public class Plant
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Species { get; set; } = string.Empty;
        public DateTime PurchaseDate { get; set; }
        public string ImageUrl { get; set; } = string.Empty;
        public int WateringInterval { get; set; }
        public int FertilizingInterval { get; set; }
        public string Notes { get; set; } = string.Empty;
        public DateTime LastWatered { get; set; }
        public DateTime LastFertilized { get; set; }
    }
}
