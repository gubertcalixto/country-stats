﻿using AutoMapper;
using CountriesGo.Domain.Entities;
using CountriesGo.Domain.Events;
using CountriesGo.Host.Dtos;
using CountriesGo.Infrastructure;
using CountriesGo.Treatment;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Rebus.Routing.TypeBased;
using Rebus.ServiceProvider;
using Rebus.Transport.InMem;
using Swashbuckle.AspNetCore.Swagger;
using IHostingEnvironment = Microsoft.AspNetCore.Hosting.IHostingEnvironment;

namespace CountriesGo.Host
{
    public class Startup
    {
        private IConfiguration Configuration { get; }
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // TODO: ADD AUTHENTICATION IF THERE'S LOGIN
            //services.AddAuthentication(AzureADDefaults.BearerAuthenticationScheme).AddAzureADBearer(options => Configuration.Bind("AzureAd", options));
            
            // Register handlers 
            services
                .AutoRegisterHandlersFromAssemblyOf<DatabaseInteractor>();

            // Configure and register Rebus
            services.AddRebus(configure => configure
                .Transport(t => t.UseInMemoryTransport(new InMemNetwork(), "CountryEvents"))
                .Routing(r => r.TypeBased().MapAssemblyOf<UpdateCountryEvent>("CountryEvents"))
            );

            services.AddCors(options =>
                options.AddDefaultPolicy(op => op.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));
            services.AddMvc();
            services.AddDbContext<DefaultContext>();
            services.AddAutoMapper(typeof(Startup))
                .AddSwaggerGen(c => c.SwaggerDoc("v1", new Info { Title = "CountriesGo", Version = "v1" }));
            
            var config = new MapperConfiguration(cfg => {
                cfg.CreateMap<Pais, PaisView>().ReverseMap();
            });
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
                app.UseDeveloperExceptionPage();
            
            app.ApplicationServices.UseRebus();

            app.UseSwagger()
                .UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "CountriesGo V1");
                    c.RoutePrefix = string.Empty;
                })
                .UseCors()
                .UseMvc();

            // TODO: ADD AUTHENTICATION IF THERE'S LOGIN
            //app.UseAuthentication();
        }
    }
}