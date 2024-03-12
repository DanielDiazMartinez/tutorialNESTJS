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
  Inject } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
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
  constructor(private booksService: BooksService,@Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,) {}

  @Get()
  @ApiOperation({ summary: 'Obtener lista de libros' }) 
  @ApiResponse({ 
    status: 201,
    description: 'Lista de libros',
    type: Book, 
  })

  @Get()
  findAll(@Req() request: Request): Promise<Book[]> { 
    let startTime = Date.now(); 
    let data = this.booksService.findAll(request.query); 

    this.writeLog(startTime, request, 200); 

    return data; 
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

  writeLog(startTime: any, request: any, statusCode: number) {
    let finishTime = Date.now();
    let elapsedTime = finishTime - startTime;

    this.logger.log({
      level: 'info',
      message: '',
      statusCode: statusCode,
      method: request['method'],
      url: request['url'],
      user: request['user'].username,
      duration: elapsedTime,
    });
  }
}
