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
//const creareCardBtn = document.getElementById('cBook')
// const cards = document.getElementById('cards');
// let i = 0;
// function createCard(){
//     for (books in myLibrary){
//         const card = document.createElement('div');
//         card.textContent = `Bookname: ${myLibrary[i].title} Bookauthor:${myLibrary[0].author} BookPages: ${myLibrary[0].pages}`
//         cards.append(card);
//        i++;
//     }
// }
const htmlElement = document.querySelector("html");
htmlElement.style.filter = "brightness(65%)"
let userBook;
let bookName;
let bookAuthor;
let bookPages;
let readOrNot;
function addBookToLibrary(){
  let bookName = prompt("What is the name of the book?");
  let bookAuthor = prompt("Who Wrote the book");
  let bookPages = prompt("How many pages are there");
  let readOrNot = prompt("Have you read the book or not,say True if you have and False if you havent.");

  let userBook = new book([bookName],[bookAuthor],[bookPages],[readOrNot])
  myLibrary.push(userBook);
  
  createCard();
}
creareCardBtn.addEventListener('click', addBookToLibrary);

// const onePiece = new book("One piece", "Eichiro oda", '20000',true);
// onePiece.info();