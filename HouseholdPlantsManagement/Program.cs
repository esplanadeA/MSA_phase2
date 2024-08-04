using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using HouseholdPlantsManagement.Models;
using HouseholdPlantsManagement.Repositories;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

// ADDING HTTP
builder.Services.AddHttpsRedirection(options =>
{
    options.RedirectStatusCode = StatusCodes.Status307TemporaryRedirect;
    options.HttpsPort = 5001; // Ensure this matches the port in launchSettings.json
});

// Configure the database context to use an in-memory database for development.
// Replace with UseSqlServer or another database provider in production.
builder.Services.AddDbContext<PlantContext>(options =>
    options.UseInMemoryDatabase("PlantDB"));

// Register the repository with dependency injection.
builder.Services.AddScoped<IPlantRepository, PlantRepository>();
// add swagger for test
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
     app.UseSwagger();

    // Enable middleware to serve Swagger UI.
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "HouseholdPlantsManagement API V1");
        c.RoutePrefix = string.Empty; // To serve the Swagger UI at the app's root (http://localhost:<port>/)
    });
}
else
{
    // In production, configure exception handling, security headers, etc.
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

// Enable HTTPS redirection
app.UseHttpsRedirection();

// Serve static files (if you have any)
app.UseStaticFiles();

// Configure routing
app.UseRouting();

// Enable authorization (if you have any policies or authentication)
app.UseAuthorization();
app.UseCors();

// Map controller routes
app.MapControllers();

// Run the application
app.Run();
