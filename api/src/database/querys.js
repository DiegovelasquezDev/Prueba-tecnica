export const queries = {
  getAllVivienda: "SELECT * FROM viviendas",
  getViviendasById: "SELECT * FROM viviendas WHERE Id = @Id",
  addNewVivienda:
    "INSERT INTO viviendas (Id, TipoDeVivienda, Zona, Direccion, Precio, Tamano, Observaciones) VALUES (NEWID(), @TipoDeVivienda, @Zona, @Direccion, @Precio, @Tamano, @Observaciones)",
  updateVivienda:
    "UPDATE viviendas SET TipoDeVivienda = @TipoDeVivienda, Zona = @Zona, Direccion = @Direccion, Precio = @Precio, Tamano = @Tamano, Observaciones = @Observaciones WHERE Id = @Id",
  deleteVivienda: "DELETE FROM viviendas WHERE Id = @Id",
};
