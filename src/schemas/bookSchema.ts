import joi from "joi";

const books = joi.object ({
    name: joi.string().required(),
    author: joi.string().required(),
    publisher: joi.string().required(),

})

const review = joi.object({
  rate: joi.number().integer().min(1).max(5).required(),
  review: joi.string().min(2).max(200).required()
})

export default {
    books,
    review
}