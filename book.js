const myLibrary = [];

function createBook(){
        libraryShelf.innerHTML = "";
        let i = 0;
        const bookUser = document.createElement('div');
        const bookUserName = document.createElement('div');
        const bookUserAuthor = document.createElement('div');
        const bookUserPages = document.createElement('div');
        bookUser.classList.add('bookUser');
        libraryShelf.append(bookUser);
        bookUser.append(bookUserName);
        bookUser.append(bookUserAuthor);
        bookUser.append(bookUserPages);

        while (i < myLibrary.length){
            bookUserName.textContent = [myLibrary[i].title]
            bookUserAuthor.textContent = [myLibrary[i].author];
            bookUserPages.textContent = [myLibrary[i].pages];
            console.log(myLibrary[i].author);
            i++;
        }
    console.log("Created book")
}

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


function changeVisibility(){
    userEntry.setAttribute('id','visible');
    
}
function pushCreate(){
    
    
    userEntry.removeAttribute('id','visible');
}

function reload(){
    const title = document.getElementById('title').value
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    let userBook = new book([title],[author],[pages],[haveURead])
    myLibrary.push(userBook);
    createBook();
    return false;
}

const htmlElement = document.querySelector("html");
const userEntry = document.querySelector('.user-entry');
const addNewBook = document.querySelector('.add-new-book');
//htmlElement.style.filter = "brightness(100%)";
const myForm = document.querySelector('#myForm')
const libraryShelf = document.querySelector('.library-shelves');
const title = document.getElementById('title').value
const author = document.querySelector('#author').value;
const pages = document.querySelector('#pages').value;
const submit = document.querySelector('#submitButton');
const haveURead = document.querySelector('#haveURead').value;


submit.addEventListener('click', pushCreate);
addNewBook.addEventListener('click', changeVisibility);
//myForm.addEventListener('click', reload)


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
//creareCardBtn.addEventListener('click', addBookToLibrary);

// const onePiece = new book("One piece", "Eichiro oda", '20000',true);
// onePiece.info();