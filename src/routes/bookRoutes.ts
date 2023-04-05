import { Router } from "express";
import bookControllers from "../controllers/bookControllers.js";
import bookSchema from "../schemas/bookSchema.js";
import {validateSchema} from "../middleware/validateSchema.js"

const bookRoutes = Router();

bookRoutes.post('/', validateSchema(bookSchema.books), bookControllers.create)
bookRoutes.get('/all', bookControllers.getAll)

bookRoutes.patch('/', bookControllers.updateStatus)

bookRoutes.post('/review', validateSchema(bookSchema.review), bookControllers.reviewBook)
bookRoutes.delete('/', bookControllers.deleteBook)
bookRoutes.get('/', bookControllers.getPublisher)





export default bookRoutes;