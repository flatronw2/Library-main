import { Writter } from "../writters/writter.model"
import { GenresEnum } from "./add-book/genres.model";

 export interface Book
{
    "id": number,
    "title": string,
    "image": string,
    "description": string,
    "dateOfCreation": string,
    "genres":  GenresEnum[],
    "writters": Writter[]
}
