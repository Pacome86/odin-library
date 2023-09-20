const myLibrary = [];

function Book(title, author, pages, read) {
    if (this instanceof Book === false) {
        return new Book(title, author, pages, read);
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? "read" : "not read yet";
    this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
    };
}

//Takes user's input and store the new book objects into an array (myLibrary) 
function addBookToLibrary() {
    //e.preventDefault(); // to stop the form for submitting
    const title = document.querySelector('#title').value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;  
    const book = new Book(title, author, pages, read);

    myLibrary.push(book);
    document.querySelector('form').reset();
    
    //for display purposes only
    //console.warn('added', book);
    //console.log(myLibrary);
    //return myLibrary;
}


// Toggle the modal dialog
const modal = document.querySelector('#modal');
const openModal = document.querySelector('.openModal');
//const closeModal = document.querySelector('.closeModal');

openModal.addEventListener('click', () => {
    modal.showModal();
});
/*
closeModal.addEventListener('click', () => {
    modal.close();
});
*/

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.close();
    };
});





document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#addBtn').addEventListener('click', addBookToLibrary);
});