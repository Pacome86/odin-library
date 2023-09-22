const myLibrary = [];

function Book(title, author, pages, read) {
    if (this instanceof Book === false) {
        return new Book(title, author, pages, read);
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? "Read" : "Not read";
    this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
    };
}

//Takes user's input and store the new book objects into an array (myLibrary)
// Then display the each book object on its own card on the page 
function addBookToLibrary() {
  //e.preventDefault(); // to stop the form for submitting
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;
  const book = new Book(title, author, pages, read);

  myLibrary.push(book);
  document.querySelector("form").reset();

  //for display purposes only
  //console.warn('added', book);
  //console.log(myLibrary);

  //Create a card and add it to the div for display on the page
  myLibrary.forEach((Book) => {
    if (Book.title !== "" || Book.author !== "" || Book.pages !== "") {
      //Create a card and add css style to the card
      const card = document.createElement("div");
      card.classList.add("card");

      //Wrap the book title within an h2 and append it to the card
      const cardTitle = document.createElement("h2");
      cardTitle.textContent = Book.title;
      card.appendChild(cardTitle);

      //Embed the book author within a p and append it to the card
      const cardAuthor = document.createElement("p");
      cardAuthor.textContent = `by ${Book.author}`;
      card.appendChild(cardAuthor);

      //Embed the number of pages within a p and append it to the card
      const cardPages = document.createElement("p");
      cardPages.textContent = `${Book.pages} pages`;
      card.appendChild(cardPages);

      //Create a button for having read or not read the book and add it to the card
      const cardRead = document.createElement("button");
      cardRead.textContent = Book.read;
      cardRead.classList.add("progress");
      card.appendChild(cardRead);
        
      //Change the status of the Book card from "read" to "not read" and vice versa 
      cardRead.addEventListener("click", () => {
          if (cardRead.textContent === "Read") {
              cardRead.textContent = "Not read";
          } else if (cardRead.textContent === "Not read") {
              cardRead.textContent = "Read";
          }
      });

      //create a button to delete the card and append it to the card
      const cardDelete = document.createElement("button");
      cardDelete.textContent = "Delete";
      cardDelete.classList.add("delete");
      card.appendChild(cardDelete);
        
      //Remove the card/book instance from the display
      cardDelete.addEventListener("click", () => {
        display.removeChild(card);
      });

      // Append the card to the display div on the page
      const display = document.querySelector(".display");
      display.appendChild(card);
      
      //Store the card locally. Test localStorage...
      localStorage.setItem(display, card); 
    }
      
  });

  myLibrary.pop(book);
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