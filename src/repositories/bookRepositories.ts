import connectionDb from "../config/database.js";
import { createBook } from "../protocols/type.js";

async function findDuplicate (newBook:createBook){
    return await connectionDb.query(
        `
        SELECT name
        FROM books
        WHERE 
          name = $1  
        `,
        [newBook.name]
      );
}

async function create (newBook:createBook) {
    return await connectionDb.query(
        `
        INSERT INTO books
        (name, author, publisher)
        VALUES ($1, $2, $3)
        `,
        [newBook.name, newBook.author, newBook.publisher]
        );
}

async function getAll () {
    return await connectionDb.query(
        `
        SELECT * FROM books
        
        `
    )
}

export default {
    findDuplicate,
    create,
    getAll

}