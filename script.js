let arrBook = [
    {
        "title": "Dune",
        "author": "Frank Herbert",
        "pages": "412",
        "read": "Didn't read",
        "idBook": "49a775eb-8016-4e07-9a0b-361429132052"
    },
    {
        "title": "1984",
        "author": "George Orwell",
        "pages": "328",
        "read": "Didn't read",
        "idBook": "d3d0fae3-40f3-4b52-b76c-20f3e625f13a"
    },
    {
        "title": "Sula",
        "author": "Toni Morrison",
        "pages": "192",
        "read": "Didn't read",
        "idBook": "2d56ddaf-9210-4d3a-8328-c5981c2f9349"
    },
    {
        "title": "Coraline",
        "author": "Neil Gaiman",
        "pages": "194",
        "read": "Didn't read",
        "idBook": "ac2ec106-8bf6-4d52-8c7b-186079279d88"
    },
    {
        "title": "Amarimonogatari",
        "author": "Nisio isin",
        "pages": "401",
        "read": "Read",
        "idBook": "72de8382-afe8-47d1-8495-4b7ceefea53c"
    }
];

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


const infoButton = document.querySelector("#infoButton");

infoButton.addEventListener("click", function() {
    console.log(arrBook);
});


const addBook = document.getElementById("addBook");

addBook.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value;

    nameBook = new CreatingBooks(title, author, pages, read, crypto.randomUUID());

    arrBook.push(nameBook);

    addBookToLibrary(nameBook);
    


    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");
    const pagesInput = document.getElementById("pages");
    const readInput = document.getElementById("read");

    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.value = "Didn't read";
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
    };
});