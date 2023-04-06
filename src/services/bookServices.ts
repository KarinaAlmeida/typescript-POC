import { createBook, publishType, reviewType } from "../protocols/type.js";
import bookRepositories from "../repositories/bookRepositories.js";
import error from "../errors/index.js";
import QueryString, { ParsedQs } from "qs";
import { string } from "joi";



async function create (newBook:createBook){
    const { rowCount } = await bookRepositories.findDuplicate(newBook);
  
      if (rowCount) throw error.alreadyExists();

      await bookRepositories.create(newBook);
   
}

async function getAll () {
    const {rows, rowCount} = await bookRepositories.getAll();

    if (!rowCount) throw error.notFoundError()
    
    return rows
     }
    
async function updateStatus (book_id:Number, review:reviewType) {
   
    // const bookStatus = await bookRepositories.getAll()
    // if (bookStatus.status) {
    //     throw new Error ('this appointment is already confirmed')
    // }

    return await bookRepositories.read(book_id, review)
}

async function getNumbers(publi:publishType) {
    const {rows, rowCount} = await bookRepositories.getNumbers(publi);

    if (!rowCount) throw error.notFoundError()
    
    return rows
     }

async function deleteBook (id: Number) {
    const {rowCount} = await bookRepositories.getBookById(id)
    if(!rowCount) throw error.notFoundError()

    await bookRepositories.deleteBook(id)  
}
    

export default {
    create,
    getAll,
    updateStatus,
    getNumbers,
    deleteBook
}