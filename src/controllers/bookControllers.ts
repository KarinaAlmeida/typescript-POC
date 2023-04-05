import { NextFunction, Request, Response } from "express-serve-static-core";
import bookServices from "../services/bookServices.js";
import { createBook } from "../protocols/type.js";

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
  
      return res.send(result );
    } catch (error) {
        console.log(error)
        next (error);
    }
}

async function updateStatus (req:Request, res:Response, next:NextFunction) {
    try {
        const result = await bookServices.updateStatus();
    
        return res.send(result);
        
      } catch (error) {
          console.log(error)
          next (error);
      }
}

async function deleteBook () {

}

async function reviewBook () {

}

async function getPublisher () {

}

export default {
    create,
    getAll,
    updateStatus,
    deleteBook,
    getPublisher,
    reviewBook
}