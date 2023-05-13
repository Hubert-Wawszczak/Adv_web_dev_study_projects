// Tablica przechowująca książki
let books = [];

// Funkcja dodająca nową książkę
function addBook(title, author, numberOfPages) {
    const book = {
        title: title,
        author: author,
        numberOfPages: numberOfPages
    };
    books.push(book);
    displayBooks(); // Wywołanie funkcji displayBooks po dodaniu książki
}

// Funkcja usuwająca pierwszy i ostatni element z tablicy
function handleRemoveFirstBook() {
    if (books.length > 0) {
        books.shift();
        displayBooks();
    }
}

function handleRemoveLastBook() {
    if (books.length > 0) {
        books.pop();
        displayBooks();
    }
}

function displayBooks() {
    const booksTable = document.getElementById('booksTable');
    booksTable.innerHTML = '';

    // Dodaj nagłówki kolumn
    const thead = booksTable.createTHead();
    const headerRow = thead.insertRow();
    const headers = ['Tytuł', 'Autor', 'Ilość stron'];

    headers.forEach((headerText) => {
        const headerCell = document.createElement('th');
        headerCell.textContent = headerText;
        headerRow.appendChild(headerCell);
    });

    // Dodaj wiersze z książkami
    const tbody = booksTable.createTBody();

    books.forEach((book) => {
        const row = tbody.insertRow();

        const titleCell = row.insertCell();
        titleCell.textContent = book.title;

        const authorCell = row.insertCell();
        authorCell.textContent = book.author;

        const pagesCell = row.insertCell();
        pagesCell.textContent = book.numberOfPages;
    });
}



// Funkcja obsługująca dodawanie książki po kliknięciu przycisku
function handleAddBook() {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const numberOfPagesInput = document.getElementById('numberOfPages');

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const numberOfPages = parseInt(numberOfPagesInput.value);

    if (title === '' || author === '' || isNaN(numberOfPages)) {
        // Wyświetlanie komunikatu o niepoprawnych danych
        alert('Wprowadź poprawne dane książki.');
        return;
    }

    addBook(title, author, numberOfPages);

    // Wyczyszczenie pól formularza po dodaniu książki
    titleInput.value = '';
    authorInput.value = '';
    numberOfPagesInput.value = '';
}


// Wywołanie funkcji displayBooks po załadowaniu strony, aby wyświetlić początkową zawartość tablicy
window.addEventListener('load', displayBooks);
