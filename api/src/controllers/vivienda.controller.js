import {
  getConnection,
  closeConnection,
  sql,
  queries,
} from "../database/connection";

export const getAllViviendas = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request.query(queries.getAllVivienda);
    res.json(result.recordset);
  } catch (error) {
    console.log("Error al obtener la lista de viviendas: ", error.message);
    res.status(500);
    res.send(error.message);
  } finally {
    closeConnection();
  }
};

export const getViviendasById = async (req, res) => {
  const { Id } = req.params;

  try {
    const pool = await getConnection();
    const result = await pool.request
      .input("Id", Id)
      .query(queries.getViviendasById);

    res.send(result.recordset[0]);
  } catch (error) {
    console.log("Error al obtener la lista de viviendas: ", error.message);
    res.status(500);
    res.send(error.message);
  } finally {
    closeConnection();
  }
};

export const createVivienda = async (req, res) => {
  const { TipoDeVivienda, Zona, Direccion, Precio, Tamano, Observaciones } =
    req.body;

  if (
    TipoDeVivienda == null ||
    Zona == null ||
    Direccion == null ||
    Precio == null ||
    Tamano == null
  ) {
    return res
      .status(400)
      .json({ msg: "Por favor llena los campos correspondientes" });
  }

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("TipoDeVivienda", sql.VarChar, TipoDeVivienda)
      .input("Zona", sql.VarChar, Zona)
      .input("Direccion", sql.VarChar, Direccion)
      .input("Precio", sql.Money, Precio)
      .input("Tamano", sql.Float, Tamano)
      .input(
        "Observaciones",
        sql.VarChar,
        Observaciones ? Observaciones : "Sin observaciones"
      )
      .query(queries.addNewVivienda);

    console.log(result);

    res.sendStatus(204);
  } catch (error) {
    console.log("Error al crear la vivienda: ", error.message);
    res.status(500);
    res.send(error.message);
  } finally {
    closeConnection();
  }
};

export const updateViviendaById = async (req, res) => {
  const { Id } = req.params;
  const { TipoDeVivienda, Zona, Direccion, Precio, Tamano, Observaciones } =
    req.body;
  if (
    TipoDeVivienda == null ||
    Zona == null ||
    Direccion == null ||
    Precio == null ||
    Tamano == null
  ) {
    return res
      .status(400)
      .json({ msg: "Por favor llena los campos correspondientes" });
  }

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("TipoDeVivienda", sql.VarChar, TipoDeVivienda)
      .input("Zona", sql.VarChar, Zona)
      .input("Direccion", sql.VarChar, Direccion)
      .input("Precio", sql.Money, Precio)
      .input("Tamano", sql.Float, Tamano)
      .input(
        "Observaciones",
        sql.VarChar,
        Observaciones ? Observaciones : "Sin observaciones"
      )
      .input("Id", sql.UniqueIdentifier, Id)
      .query(queries.updateViviendaById);

    console.log(result);

    res.sendStatus(200);
    res.send("Se actualizo con exito");
  } catch (error) {
    console.log("Error al actualizar la vivienda: ", error.message);
    res.status(500);
    res.send(error.message);
  } finally {
    closeConnection();
  }
};

export const deleteViviendaById = async (req, res) => {
  const { Id } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool.request
      .input("Id", Id)
      .query(queries.deleteVivienda);

    res.sendStatus(204);
  } catch (error) {
    console.log("Error al eliminar la vivienda: ", error.message);
    res.status(500);
    res.send(error.message);
  } finally {
    closeConnection();
  }
};
