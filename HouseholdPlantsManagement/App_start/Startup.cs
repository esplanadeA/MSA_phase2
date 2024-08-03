if (builder.Environment.IsDevelopment())
{
    builder.Services.AddDbContext<StudentContext>(options =>
        options.UseInMemoryDatabase("Student"));
}
else
{
    builder.Services.AddDbContext<StudentContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("StudentContext") ?? throw new InvalidOperationException("Connection string 'StudentContext' not found.")));
}