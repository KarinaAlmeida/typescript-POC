import { ParsedQs } from "qs";
import connectionDb from "../config/database.js";
import { createBook, publishType, reviewType } from "../protocols/type.js";

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

async function read (book_id:Number, review:reviewType) {
     await connectionDb.query (
        `
        UPDATE books 
        SET status = true 
        WHERE id = $1 
        `,
        [book_id]

    );

    await connectionDb.query(
        `
          INSERT INTO review 
          (rate, review, book_id)
          VALUES ($1, $2, $3)
        `,
        [review.rate, review.review, book_id]
      );
}

async function getNumbers (publi:publishType) {
    return await connectionDb.query(
        `
        SELECT COUNT(*) 
        FROM books
        WHERE LOWER (publisher) LIKE($1)
        `, 
        [`%${publi}%`]
    )
}

async function getBookById (id:Number) {
    return await connectionDb.query(`
    SELECT * FROM books
    WHERE id = $1
`, [id])
}

async function deleteBook (id:Number) {
    return await connectionDb.query(`
    DELETE FROM books
    WHERE id = $1
`, [id])
}


export default {
    findDuplicate,
    create,
    getAll,
    read,
    getNumbers,
    getBookById,
    deleteBook

}