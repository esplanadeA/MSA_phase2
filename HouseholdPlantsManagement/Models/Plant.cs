namespace HouseholdPlantsManagement.Models
{
    public class Plant
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Species { get; set; }
        public DateTime PurchaseDate { get; set; }
        public string ImageUrl { get; set; }
        public int WateringInterval { get; set; }
        public int FertilizingInterval { get; set; }
        public string Notes { get; set; }
        public DateTime LastWatered { get; set; }
        public DateTime LastFertilized { get; set; }
    }
}