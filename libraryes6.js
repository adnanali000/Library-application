//book class

class Book{
    constructor(name,author,type){
        this.name = name;
        this.author = author;
        this.type = type;
    }
    
}


class Display{
    add(book){
        let tableBody = document.getElementById('tableBody');
        let uiString = `
        <tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
        <td><button type="button" class="btn btn-danger" onclick="deleteBook()">Delete</button></td>
        </tr>
    `;

    tableBody.innerHTML += uiString;

    }

    clear(){
        let formLibrary = document.getElementById('formLibrary');
        formLibrary.reset();
    }

    validate(book){
        if(book.name.length < 2 || book.author.length < 2){
            return false;
        }
        else{

            return true;
        }
    }

    show(type,displaymessage){
        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${type} :</strong> ${displaymessage}.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>`

        setTimeout(function(){
            message.innerHTML = '';
            
        }, 5000);


    }

}

//add submit event listner to formLibrary

let formLibrary = document.getElementById('formLibrary');
formLibrary.addEventListener('submit',formLibrarySubmit);

function formLibrarySubmit(e) {
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let nonFiction = document.getElementById('nonFiction');
    let type;
    if(fiction.checked){
        type = fiction.value;
    }
    else if(programming.checked){
        type = fiction.value;
    }
    else if(nonFiction.checked){
        type = fiction.value;
    }

    let book = new Book(name,author,type);
    console.log(book);

    let display = new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success','your book has been submitted');

    }
    else{
        display.show('danger','add your book');

    }

    e.preventDefault();

}

function deleteBook() {
    
}
