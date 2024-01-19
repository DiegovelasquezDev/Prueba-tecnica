import { Router } from "express";
import {
  getAllViviendas,
  getViviendasById,
  createVivienda,
  updateViviendaById,
  deleteViviendaById,
} from "../controllers/vivienda.controller";

const router = Router();

router.get("/viviendas", getAllViviendas);
router.get("/viviendas/:id", getViviendasById);
router.post("/viviendas", createVivienda);
router.put("/viviendas/:id", updateViviendaById);
router.delete("/viviendas/:id", deleteViviendaById);

export default router;
