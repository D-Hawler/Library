let arrBook = [];

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

    arrBook.push(nameBook);

    addBookToLibrary(nameBook);
});

function addBookToLibrary(nameBook) {
    const library = document.querySelector("#library");

    const bookContainer = document.createElement("div");
    bookContainer.setAttribute("id", nameBook.idBook);
    bookContainer.classList.add("bookContainer");

    const book = document.createElement("div");
    book.classList.add("book");
    book.setAttribute("title", `Annotation: ${nameBook.title} by ${nameBook.author}, ${nameBook.pages} pages.`);
    
    const titleBook = document.createElement("h1");
    titleBook.classList.add("rotated-text");
    titleBook.innerHTML = `${nameBook.title}<br>by ${nameBook.author}`;
    book.appendChild(titleBook);

    const raedStatus = document.createElement("div");
    raedStatus.classList.add("raedStatus");

    const switchReadStatus = document.createElement("a");
    switchReadStatus.setAttribute("href", "#");
    switchReadStatus.classList.add("switchReadStatus");
    switchReadStatus.setAttribute("id", nameBook.idBook);
    switchReadStatus.textContent = nameBook.read;
    
    raedStatus.appendChild(switchReadStatus);
    book.appendChild(raedStatus);

    bookContainer.appendChild(book);

    const deleteBook = document.createElement("a");
    deleteBook.setAttribute("href", "#");
    deleteBook.classList.add("deleteBook");
    deleteBook.innerHTML = "&times;";

    bookContainer.appendChild(deleteBook);


    library.appendChild(bookContainer);
};



const library = document.querySelector("#library");

library.addEventListener("click", function(event) {
    event.preventDefault()
    if (event.target.classList.contains("switchReadStatus")) {
        const switchReadStatus = event.target;

        const searchID = arrBook.find(searchID => searchID.idBook === switchReadStatus.id);
        
        if (switchReadStatus.textContent === "Didn't read") {
            switchReadStatus.textContent = "Read";
            searchID.read = "Read";

            console.log(searchID);
        } else {
            switchReadStatus.textContent = "Didn't read";
            searchID.read = "Didn't read";

            console.log(searchID);
        };    
    };
});

library.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target.classList.contains("deleteBook")) {
        const deleteBook = event.target;

        const parentContainer = deleteBook.parentNode;
        parentContainer.remove();

        arrBook = arrBook.filter(searchID => searchID.idBook !== parentContainer.id);
        console.log(arrBook);
    };
});