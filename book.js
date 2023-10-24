const myLibrary = [];


function book(title,author,pages,read){
     this.title = title;
     this.author = author;
     this.pages = pages;
     this.read = read;
     this.info = function(){
         console.log(` ${title} was written by ${author}, it has ${pages} pages.`)
         if (read = true){
             console.log("I have read this book")
         } else {
             console.log("I have not read this book")
         }
     }
}

function addBookToLibrary(){
  const bookName = prompt("What is the name of the book?");
  const bookAuthor = prompt("Who Wrote the book>");
  const bookPages = int(prompt("How many pages are there"));
  const readOrNot = prompt("Have you read the book or not,say True if you have and False if you havent.");

  const newBook1 = new book(bookName,bookAuthor,bookPages,readOrNot)
  myLibrary.push(newBook1);
}
addBookToLibrary();
// const onePiece = new book("One piece", "Eichiro oda", '20000',true);
// onePiece.info();