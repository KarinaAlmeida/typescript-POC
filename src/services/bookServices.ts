import { createBook } from "../protocols/type.js";
import bookRepositories from "../repositories/bookRepositories.js";
import error from "../errors/index.js";



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
    
async function updateStatus () {
}


export default {
    create,
    getAll,
    updateStatus
}