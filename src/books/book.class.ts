
export class Book {
    id: number;
    title: string;
    genre: string;
    description: string;
    author: string;
    publisher: string;
    pages: number;
    image_url: string;
}

export class BookDto {
    readonly title: string;
    readonly genre: string;
    readonly description: string;
    readonly author: string;
    readonly publisher: string;
    readonly pages: number;
    readonly image_url: string;
}