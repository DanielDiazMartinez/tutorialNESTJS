import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
    findAll(): any { 
        return 'findAll funcionando';
    }
    //Funcion que busca un libro o te da la lista de libros
    findBook(bookId: string) {
        return `findBook funcionando con bookId: ${bookId}`;
      }
}
