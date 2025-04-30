 const arrBook = [];

function CreatingBooks(title, author, pages, read, idBook) {
    if (!new.target) {
        throw Error(`No “new” found when creating an object`);
    };

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.idBook = idBook;
};

CreatingBooks.prototype.infoBook = function() {
    return `${this.title}, ${this.author}, ${this.pages}, ${this.read}, ${this.idBook}`;
};




const addBook = document.getElementById("addBook");

addBook.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value;

    let nameBook = title;
    nameBook = new CreatingBooks(title, author, pages, read, crypto.randomUUID());

    addBookToArray(nameBook);

    addBookToLibrary(nameBook);



    console.log(nameBook.infoBook());

    console.log(nameBook.valueOf());

    console.log("Hello world!!");
});

function addBookToArray(nameBook) {
    arrBook.push(nameBook);




    console.log(arrBook);
};

function addBookToLibrary(nameBook) {
    const library = document.querySelector("#library");

    const book = document.createElement("div");
    book.setAttribute("id", nameBook.idBook);
    book.classList.add("book");
    book.setAttribute("title", `Annotation: ${nameBook.title} by ${nameBook.author}, ${nameBook.pages} pages`);
    
    const titleBook = document.createElement("h1");
    titleBook.classList.add("rotated-text");
    titleBook.textContent = nameBook.title;
    book.appendChild(titleBook);

    library.appendChild(book);
};