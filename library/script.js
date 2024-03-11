class Book {
    constructor(name, author, identifier, category, quantity) {
        this.name = name;
        this.author = author;
        this.identifier = identifier;
        this.category = category;
        this.quantity = quantity;
        this.available = quantity;
    }

    lend() {
        if (this.available > 0) {
            this.available--;
            alert(`The book "${this.name}" has been lent.`);
        } else {
            alert(`There are no available copies of the book "${this.name}".`);
        }
    }

    returnBook() {
        if (this.available < this.quantity) {
            this.available++;
            alert(`The book "${this.name}" has been returned.`);
        } else {
            alert(`All copies of the book "${this.name}" have already been returned.`);
        }
    }
}

let book1 = new Book("Alice's Adventures in Wonderland", "Lewis Carroll", "1234", "Fiction", 5);
let book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", "5678", "Fantasy", 3);

let action = prompt("Choose an action: lend or return", "lend");

if (action === "lend") {
    let bookToLend = prompt("Enter the name of the book you want to lend:", "");
    if (bookToLend === book1.name) {
        book1.lend();
    } else if (bookToLend === book2.name) {
        book2.lend();
    } else {
        alert("Book not found!");
    }
} else if (action === "return") {
    let bookToReturn = prompt("Enter the name of the book you want to return:", "");
    if (bookToReturn === book1.name) {
        book1.returnBook();
    } else if (bookToReturn === book2.name) {
        book2.returnBook();
    } else {
        alert("Book not found!");
    }
} else {
    alert("Invalid action!");
}
