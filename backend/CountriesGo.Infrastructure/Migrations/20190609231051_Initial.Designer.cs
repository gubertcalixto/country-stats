﻿// <auto-generated />
using System;
using CountriesGo.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace CountriesGo.Infrastructure.Migrations
{
    [DbContext(typeof(DefaultContext))]
    [Migration("20190609231051_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("CountriesGo.Domain.Entities.Eletricidade", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.HasKey("Id");

                    b.ToTable("Eletricidade");
                });

            modelBuilder.Entity("CountriesGo.Domain.Entities.EletricidadeFrequencia", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid?>("EletricidadeId");

                    b.Property<int>("FrequenciaValor");

                    b.HasKey("Id");

                    b.HasIndex("EletricidadeId");

                    b.ToTable("EletricidadeFrequencia");
                });

            modelBuilder.Entity("CountriesGo.Domain.Entities.EletricidadeVoltagem", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid?>("EletricidadeId");

                    b.Property<int>("NumeroVoltagem");

                    b.HasKey("Id");

                    b.HasIndex("EletricidadeId");

                    b.ToTable("EletricidadeVoltagem");
                });

            modelBuilder.Entity("CountriesGo.Domain.Entities.Linguagem", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Nome");

                    b.Property<bool>("Oficial");

                    b.Property<Guid?>("PaisId");

                    b.Property<double>("Porcentagem");

                    b.Property<string>("Simbolo");

                    b.HasKey("Id");

                    b.HasIndex("PaisId");

                    b.ToTable("Linguagens");
                });

            modelBuilder.Entity("CountriesGo.Domain.Entities.LocalizacaoPais", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Capital");

                    b.Property<string>("Continente");

                    b.Property<string>("FusoHorario");

                    b.Property<long>("Latitude");

                    b.Property<Guid?>("LocalizacaoPaisId");

                    b.Property<long>("Longitude");

                    b.Property<string>("Observacao");

                    b.Property<string>("RegiaoContinental");

                    b.Property<int>("Zoom");

                    b.HasKey("Id");

                    b.HasIndex("LocalizacaoPaisId");

                    b.ToTable("Localizacoes");
                });

            modelBuilder.Entity("CountriesGo.Domain.Entities.Moeda", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Codigo");

                    b.Property<string>("Nome");

                    b.Property<Guid?>("PaisId");

                    b.Property<bool>("Principal");

                    b.Property<string>("Simbolo");

                    b.HasKey("Id");

                    b.HasIndex("PaisId");

                    b.ToTable("Moedas");
                });

            modelBuilder.Entity("CountriesGo.Domain.Entities.Pais", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid?>("EletricidadeId");

                    b.Property<string>("ImagemBandeira");

                    b.Property<Guid?>("LocalizacaoId");

                    b.Property<string>("Nome");

                    b.Property<string>("NomeCompleto");

                    b.Property<string>("NomeNormalizado");

                    b.Property<string>("NomenclaturaNativos");

                    b.Property<int>("QuantidadePopulacao");

                    b.Property<string>("SiglaPais2Digitos");

                    b.Property<string>("SiglaPais3Digitos");

                    b.Property<Guid?>("TelefoneId");

                    b.HasKey("Id");

                    b.HasIndex("EletricidadeId");

                    b.HasIndex("LocalizacaoId");

                    b.HasIndex("TelefoneId");

                    b.ToTable("Paises");
                });

            modelBuilder.Entity("CountriesGo.Domain.Entities.PlugTomada", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid?>("EletricidadeId");

                    b.Property<string>("ImagemTomada");

                    b.Property<string>("TipoTomada");

                    b.HasKey("Id");

                    b.HasIndex("EletricidadeId");

                    b.ToTable("PlugTomada");
                });

            modelBuilder.Entity("CountriesGo.Domain.Entities.Telefone", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CodigoTelefone");

                    b.Property<string>("TelefoneAmbulancia");

                    b.Property<string>("TelefoneBombeiros");

                    b.Property<string>("TelefonePolicia");

                    b.HasKey("Id");

                    b.ToTable("Telefones");
                });

            modelBuilder.Entity("CountriesGo.Domain.Entities.TentativasLogin", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Data");

                    b.Property<string>("IP");

                    b.Property<string>("OrigemAcesso");

                    b.Property<bool>("Sucesso");

                    b.Property<Guid?>("UsuarioId");

                    b.HasKey("Id");

                    b.HasIndex("UsuarioId");

                    b.ToTable("TentativasLogin");
                });

            modelBuilder.Entity("CountriesGo.Domain.Entities.Usuario", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("AcessoBloqueado");

                    b.Property<DateTime>("AcessoBloqueadoDataFinal");

                    b.Property<DateTime>("DataCriacao");

                    b.Property<string>("Email");

                    b.Property<bool>("EmailConfimado");

                    b.Property<string>("Login");

                    b.Property<string>("Nome");

                    b.Property<string>("Senha");

                    b.Property<string>("Sobrenome");

                    b.HasKey("Id");

                    b.ToTable("Usuarios");
                });

            modelBuilder.Entity("CountriesGo.Domain.Entities.Vacina", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Nome");

                    b.Property<string>("Observacoes");

                    b.Property<Guid?>("PaisId");

                    b.Property<int>("RiscoVacina");

                    b.HasKey("Id");

                    b.HasIndex("PaisId");

                    b.ToTable("Vacinas");
                });

            modelBuilder.Entity("CountriesGo.Domain.Entities.EletricidadeFrequencia", b =>
                {
                    b.HasOne("CountriesGo.Domain.Entities.Eletricidade")
                        .WithMany("Frequencias")
                        .HasForeignKey("EletricidadeId");
                });

            modelBuilder.Entity("CountriesGo.Domain.Entities.EletricidadeVoltagem", b =>
                {
                    b.HasOne("CountriesGo.Domain.Entities.Eletricidade")
                        .WithMany("Voltagens")
                        .HasForeignKey("EletricidadeId");
                });

            modelBuilder.Entity("CountriesGo.Domain.Entities.Linguagem", b =>
                {
                    b.HasOne("CountriesGo.Domain.Entities.Pais")
                        .WithMany("Linguagens")
                        .HasForeignKey("PaisId");
                });

            modelBuilder.Entity("CountriesGo.Domain.Entities.LocalizacaoPais", b =>
                {
                    b.HasOne("CountriesGo.Domain.Entities.LocalizacaoPais")
                        .WithMany("PaisesVizinhos")
                        .HasForeignKey("LocalizacaoPaisId");
                });

            modelBuilder.Entity("CountriesGo.Domain.Entities.Moeda", b =>
                {
                    b.HasOne("CountriesGo.Domain.Entities.Pais")
                        .WithMany("Moeda")
                        .HasForeignKey("PaisId");
                });

            modelBuilder.Entity("CountriesGo.Domain.Entities.Pais", b =>
                {
                    b.HasOne("CountriesGo.Domain.Entities.Eletricidade", "Eletricidade")
                        .WithMany()
                        .HasForeignKey("EletricidadeId");

                    b.HasOne("CountriesGo.Domain.Entities.LocalizacaoPais", "Localizacao")
                        .WithMany()
                        .HasForeignKey("LocalizacaoId");

                    b.HasOne("CountriesGo.Domain.Entities.Telefone", "Telefone")
                        .WithMany()
                        .HasForeignKey("TelefoneId");
                });

            modelBuilder.Entity("CountriesGo.Domain.Entities.PlugTomada", b =>
                {
                    b.HasOne("CountriesGo.Domain.Entities.Eletricidade")
                        .WithMany("PlugsTomadas")
                        .HasForeignKey("EletricidadeId");
                });

            modelBuilder.Entity("CountriesGo.Domain.Entities.TentativasLogin", b =>
                {
                    b.HasOne("CountriesGo.Domain.Entities.Usuario", "Usuario")
                        .WithMany()
                        .HasForeignKey("UsuarioId");
                });

            modelBuilder.Entity("CountriesGo.Domain.Entities.Vacina", b =>
                {
                    b.HasOne("CountriesGo.Domain.Entities.Pais")
                        .WithMany("Vacina")
                        .HasForeignKey("PaisId");
                });
#pragma warning restore 612, 618
        }
    }
}
