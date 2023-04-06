import { NextFunction, Request, Response } from "express-serve-static-core";
import bookServices from "../services/bookServices.js";
import { createBook, reviewType, publishType } from "../protocols/type.js";
import { number } from "joi";

async function create (req:Request, res:Response, next:NextFunction) {
    const newBook = req.body as createBook;

    try {
        const result= await bookServices.create(newBook)
        return res.send(result)

    } catch (error) {
        console.log(error)
        next(error)
    }
}

async function getAll (req:Request, res:Response, next:NextFunction) {
    try {
      const result = await bookServices.getAll();
  
      return res.send(result);
    } catch (error) {
        console.log(error)
        next (error);
    }
}

async function updateStatus (req:Request, res:Response, next:NextFunction) {
    const book_id:number = +req.params.id;
    const review= req.body as reviewType

    try {
        const result = await bookServices.updateStatus(book_id, review);
    
        return res.send(result);

      } catch (error) {
          console.log(error)
          next (error);
      }
}

async function deleteBook (req: Request, res: Response, next: NextFunction) {
        const id: Number = +req.params.id
        console.log(id)

        try {
            await bookServices.deleteBook(id)
    
            return res.sendStatus(200)        
        } catch (error) {
            console.log(error)
            next(error)
        }
        
    
}

async function getPublisher (req:Request, res:Response, next:NextFunction) {
    const publi= req.query.publi as publishType
    try {
        const result = await bookServices.getNumbers(publi);
    
        return res.send(result);
      } catch (error) {
          console.log(error)
          next (error);
      }
}

export default {
    create,
    getAll,
    updateStatus,
    deleteBook,
    getPublisher
}