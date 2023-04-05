import { Router } from "express";

import bookRoutes from "./bookRoutes.js";

const routes = Router();

routes.use("/books", bookRoutes);


export default routes;