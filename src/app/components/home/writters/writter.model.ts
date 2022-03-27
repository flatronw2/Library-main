import { Book } from "../books/books.model"
 export interface Writter
{
    "id": number,
    "image": string,
    "fullName": string,
    "birthday": string,
    "books": Book[]
}
