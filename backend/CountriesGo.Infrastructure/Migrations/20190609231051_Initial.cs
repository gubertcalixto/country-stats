using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CountriesGo.Infrastructure.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Eletricidade",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Eletricidade", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Localizacoes",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Continente = table.Column<string>(nullable: true),
                    RegiaoContinental = table.Column<string>(nullable: true),
                    Capital = table.Column<string>(nullable: true),
                    Latitude = table.Column<long>(nullable: false),
                    Longitude = table.Column<long>(nullable: false),
                    Zoom = table.Column<int>(nullable: false),
                    FusoHorario = table.Column<string>(nullable: true),
                    Observacao = table.Column<string>(nullable: true),
                    LocalizacaoPaisId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Localizacoes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Localizacoes_Localizacoes_LocalizacaoPaisId",
                        column: x => x.LocalizacaoPaisId,
                        principalTable: "Localizacoes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Telefones",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CodigoTelefone = table.Column<string>(nullable: true),
                    TelefoneBombeiros = table.Column<string>(nullable: true),
                    TelefonePolicia = table.Column<string>(nullable: true),
                    TelefoneAmbulancia = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Telefones", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Nome = table.Column<string>(nullable: true),
                    Sobrenome = table.Column<string>(nullable: true),
                    Login = table.Column<string>(nullable: true),
                    Senha = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    EmailConfimado = table.Column<bool>(nullable: false),
                    AcessoBloqueado = table.Column<bool>(nullable: false),
                    AcessoBloqueadoDataFinal = table.Column<DateTime>(nullable: false),
                    DataCriacao = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EletricidadeFrequencia",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    FrequenciaValor = table.Column<int>(nullable: false),
                    EletricidadeId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EletricidadeFrequencia", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EletricidadeFrequencia_Eletricidade_EletricidadeId",
                        column: x => x.EletricidadeId,
                        principalTable: "Eletricidade",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "EletricidadeVoltagem",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    NumeroVoltagem = table.Column<int>(nullable: false),
                    EletricidadeId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EletricidadeVoltagem", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EletricidadeVoltagem_Eletricidade_EletricidadeId",
                        column: x => x.EletricidadeId,
                        principalTable: "Eletricidade",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "PlugTomada",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    TipoTomada = table.Column<string>(nullable: true),
                    ImagemTomada = table.Column<string>(nullable: true),
                    EletricidadeId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PlugTomada", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PlugTomada_Eletricidade_EletricidadeId",
                        column: x => x.EletricidadeId,
                        principalTable: "Eletricidade",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Paises",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Nome = table.Column<string>(nullable: true),
                    NomeCompleto = table.Column<string>(nullable: true),
                    NomeNormalizado = table.Column<string>(nullable: true),
                    SiglaPais2Digitos = table.Column<string>(nullable: true),
                    SiglaPais3Digitos = table.Column<string>(nullable: true),
                    QuantidadePopulacao = table.Column<int>(nullable: false),
                    ImagemBandeira = table.Column<string>(nullable: true),
                    NomenclaturaNativos = table.Column<string>(nullable: true),
                    LocalizacaoId = table.Column<Guid>(nullable: true),
                    TelefoneId = table.Column<Guid>(nullable: true),
                    EletricidadeId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Paises", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Paises_Eletricidade_EletricidadeId",
                        column: x => x.EletricidadeId,
                        principalTable: "Eletricidade",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Paises_Localizacoes_LocalizacaoId",
                        column: x => x.LocalizacaoId,
                        principalTable: "Localizacoes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Paises_Telefones_TelefoneId",
                        column: x => x.TelefoneId,
                        principalTable: "Telefones",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "TentativasLogin",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    UsuarioId = table.Column<Guid>(nullable: true),
                    Data = table.Column<DateTime>(nullable: false),
                    Sucesso = table.Column<bool>(nullable: false),
                    IP = table.Column<string>(nullable: true),
                    OrigemAcesso = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TentativasLogin", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TentativasLogin_Usuarios_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "Usuarios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Linguagens",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Nome = table.Column<string>(nullable: true),
                    Simbolo = table.Column<string>(nullable: true),
                    Porcentagem = table.Column<double>(nullable: false),
                    Oficial = table.Column<bool>(nullable: false),
                    PaisId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Linguagens", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Linguagens_Paises_PaisId",
                        column: x => x.PaisId,
                        principalTable: "Paises",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Moedas",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Nome = table.Column<string>(nullable: true),
                    Codigo = table.Column<string>(nullable: true),
                    Simbolo = table.Column<string>(nullable: true),
                    Principal = table.Column<bool>(nullable: false),
                    PaisId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Moedas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Moedas_Paises_PaisId",
                        column: x => x.PaisId,
                        principalTable: "Paises",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Vacinas",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Nome = table.Column<string>(nullable: true),
                    RiscoVacina = table.Column<int>(nullable: false),
                    Observacoes = table.Column<string>(nullable: true),
                    PaisId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vacinas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Vacinas_Paises_PaisId",
                        column: x => x.PaisId,
                        principalTable: "Paises",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_EletricidadeFrequencia_EletricidadeId",
                table: "EletricidadeFrequencia",
                column: "EletricidadeId");

            migrationBuilder.CreateIndex(
                name: "IX_EletricidadeVoltagem_EletricidadeId",
                table: "EletricidadeVoltagem",
                column: "EletricidadeId");

            migrationBuilder.CreateIndex(
                name: "IX_Linguagens_PaisId",
                table: "Linguagens",
                column: "PaisId");

            migrationBuilder.CreateIndex(
                name: "IX_Localizacoes_LocalizacaoPaisId",
                table: "Localizacoes",
                column: "LocalizacaoPaisId");

            migrationBuilder.CreateIndex(
                name: "IX_Moedas_PaisId",
                table: "Moedas",
                column: "PaisId");

            migrationBuilder.CreateIndex(
                name: "IX_Paises_EletricidadeId",
                table: "Paises",
                column: "EletricidadeId");

            migrationBuilder.CreateIndex(
                name: "IX_Paises_LocalizacaoId",
                table: "Paises",
                column: "LocalizacaoId");

            migrationBuilder.CreateIndex(
                name: "IX_Paises_TelefoneId",
                table: "Paises",
                column: "TelefoneId");

            migrationBuilder.CreateIndex(
                name: "IX_PlugTomada_EletricidadeId",
                table: "PlugTomada",
                column: "EletricidadeId");

            migrationBuilder.CreateIndex(
                name: "IX_TentativasLogin_UsuarioId",
                table: "TentativasLogin",
                column: "UsuarioId");

            migrationBuilder.CreateIndex(
                name: "IX_Vacinas_PaisId",
                table: "Vacinas",
                column: "PaisId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EletricidadeFrequencia");

            migrationBuilder.DropTable(
                name: "EletricidadeVoltagem");

            migrationBuilder.DropTable(
                name: "Linguagens");

            migrationBuilder.DropTable(
                name: "Moedas");

            migrationBuilder.DropTable(
                name: "PlugTomada");

            migrationBuilder.DropTable(
                name: "TentativasLogin");

            migrationBuilder.DropTable(
                name: "Vacinas");

            migrationBuilder.DropTable(
                name: "Usuarios");

            migrationBuilder.DropTable(
                name: "Paises");

            migrationBuilder.DropTable(
                name: "Eletricidade");

            migrationBuilder.DropTable(
                name: "Localizacoes");

            migrationBuilder.DropTable(
                name: "Telefones");
        }
    }
}
