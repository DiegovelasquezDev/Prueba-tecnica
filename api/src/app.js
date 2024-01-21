import express from "express";
import config from "./config";
import viviendaRoutes from "./routes/vivienda.routes";
import { getConnection } from "./database/connection";

const app = express();

getConnection();

//Configuraciones
app.set("port", config.port);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api", viviendaRoutes);

export default app;
