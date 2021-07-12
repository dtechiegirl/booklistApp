//BOOK CLASS: REPRESENTS A BOOK
 class Book{
     constructor(title, author, isbn){
         this.title = title;
         this.author = author;
         this.isbn = isbn;

     }
 }

//UI CLASS: HANDLE UI TASKS
class UI {
    static displayBooks(){
        const StoreBooks = [
            {
            title: 'Studying human psychology',

            author: 'John Smith',
             isbn: '1234'
            },

            {
                title: 'Studying human psychology 18',
                author: 'John Smith1',
                isbn: '12345'  
            }

        ];
        const books = StoreBooks;
        books.forEach((book) => UI. addBookToList(book));

    }
    static addBookToList(book){
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');

        row.innerHTML = `

        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href = "#" class = "btn btn-danger btn-sm delete ">REMOVE BOOK</a></td>
      `;   
      list.appendChild(row);
    }
    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className){

    }
    //TO CLEAR FIELDS
    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

//STORE CLASS : HANDLES STORAGE



//EVENT: DISPLAY BOOK
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//EVENT: ADD A BOOK
document.querySelector('#book-form').addEventListener('submit', (e) => {
    //PREVENT ACTUAL SUBMIT
    e.preventDefault();
    //  GET FORM VALUE
const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').   value;

    //VALIDATE
    if(title === '' || author === ''  || isbn === ''){
        alert('please fill all fields ');
    }
            else{
            //INSTANTIATE BOOK
            const book = new Book(title, author, isbn);

            //ADD BOOK TO UI LIST
            UI.addBookToList(book);

            //CLEAR FIELD
            UI.clearFields();
        }
});
        
    

  


//EVENT: REMOVE A BOOK
document.querySelector('#book-list').addEventListener('click', (e)=>{
    UI.deleteBook(e.target);
});
