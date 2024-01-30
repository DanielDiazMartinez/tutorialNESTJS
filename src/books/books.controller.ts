import {
  Controller,
  Get,
  Param,
  Req,
  Post,
  Body,
  Delete,
  Put,
  UseGuards,

} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BooksService } from './books.service';
import { Request } from 'express';
import { BookDto } from './book.dto'; 
import { Book } from './book.entity'; 
import { 
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';



@Controller('books')
@UseGuards(AuthGuard('jwt'))
export class BooksController {
 /** 
   *
   * @returns {Book[]} Devuelve una lista de libros
   * @param {Request} request Lista de parámetros para filtrar
   */
  constructor(private booksService: BooksService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener lista de libros' }) 
  @ApiResponse({ 
    status: 201,
    description: 'Lista de libros',
    type: Book, 
  })
  findAll(@Req() request: Request): Promise<Book[]> {
    console.log(request.query);
    return this.booksService.findAll(request.query);
  }

  @Get(':bookId')
  findBook(@Param('bookId') bookId: string): Promise<Book> {
    return this.booksService.findBook(bookId);
  }

  @Post()
  createBook(@Body() newBook: BookDto): Promise<Book> { 
    return this.booksService.createBook(newBook);
  }

  @Delete(':bookId')
  deleteBook(@Param('bookId') bookId: string): Promise<Book> {
    return this.booksService.deleteBook(bookId);
  }

  @Put(':bookId')
  updateBook(
    @Param('bookId') bookId: string,
    @Body() newBook: BookDto, 
  ): Promise<Book> {
    return this.booksService.updateBook(bookId, newBook);
  }
}
