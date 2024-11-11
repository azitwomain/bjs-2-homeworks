class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        return this.state = this.state * 1.5;
    }

    set changeState(count) {
        if (count < 0) {
            this.state = 0;
        } else if (count > 100) {
            this.state = 100;
        } else {
            this.state = count;
        }
    }
    get readState() {
        return this.state
    }

}

class Magazine extends PrintEditionItem {
    constructor() {
        super()
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(bookAuthor) {
        super(bookAuthor)
        this.type = "book";
        this.author = bookAuthor;
    }
}

class NovelBook extends Book {
    constructor(bookAuthor) {
        super(bookAuthor)

        this.type = "novel";
    }
}
class FantasticBook extends Book {
    constructor(bookAuthor) {
        super(bookAuthor)
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor(bookAuthor) {
        super(bookAuthor)

        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const foundBook = this.books.find(book => book[type] === value);
        return foundBook !== undefined ? foundBook : null;
    }

    giveBookByName(bookName) {
        const index = this.books.findIndex(book => book.name === bookName);
        if (index !== -1) {
            const book = this.books[index];
            this.books.splice(index, 1);
            return book;
        } else {
            return null;
        }
    }
}


