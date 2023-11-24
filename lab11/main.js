const input = document.getElementById('searchInput');
const list = document.getElementById('bookList');
const details = document.getElementById('bookDetails');
const bookshelf = document.getElementById('myBookshelf');

let books = [];
let myBookshelfList = JSON.parse(localStorage.getItem('myBookshelfList')) || [];

function searchBooks() {
  const query = input.value.trim();

  if (query !== '') {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        books = data.items || [];
        displayBooks();
      })
      .catch((error) => console.error('No books found', error));
  } else {
    alert('Please try again.');
  }
} //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

//Updates the HTML file to show all the books found after the search
//Two buttons (Add to Bookshelf and Details) will be shown as options for the user
function displayBooks() {
  list.innerHTML = '';
  books.forEach((book) => {
    const bookItem = document.createElement('div');
    bookItem.classList.add('book-item');
    const name = book.volumeInfo.title;
    const bookAuthor = book.volumeInfo.authors
      ? book.volumeInfo.authors.join(', ')
      : 'Unknown Author';
    bookItem.innerHTML = `
            <h3>${name}</h3>
            <p>Author(s): ${bookAuthor}</p>
            <button onclick="addToBookshelf(${books.indexOf(
              book
            )})">Add to Bookshelf</button>
            <button onclick="toggleDetails(${books.indexOf(
              book
            )})">Details</button>
        `;
    list.appendChild(bookItem);
  }); // https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
}

//The description of each book after clicking the button will be displayed at the bottom just above the "My Bookshelf" section
//Updates the HTML file to display details about a select book
function toggleDetails(index) {
  const myBook = books[index];
  const description =
    myBook.volumeInfo.description || 'No description available.';
  const detailsHTML = `
        <h3>${myBook.volumeInfo.title}</h3>
        <p>Author(s): ${
          myBook.volumeInfo.authors
            ? myBook.volumeInfo.authors.join(', ')
            : 'Unknown Author'
        }</p>
        <p>Description: ${description}</p>
    `;

  details.innerHTML = detailsHTML;
  if (details.style.display === 'none') {
    details.style.display = 'block';
  } else {
    details.style.display = 'none';
  }
}
//Updates the HTML file to display information about the book(s) in the bookshelf
function displayBookshelf() {
  bookshelf.innerHTML = '<h2>Bookshelf</h2>';
  if (myBookshelfList.length === 0) {
    bookshelf.innerHTML += '<p>No books in shelf</p>';
  } else {
    myBookshelfList.forEach((book) => {
      const bookItem = document.createElement('div');
      bookItem.classList.add('book-item');
      bookItem.innerHTML = `
                <h3>${book.title}</h3>
                <p>Author(s): ${book.author}</p>
                <button onclick="removeFromBookshelf('${book.id}')">Remove from Bookshelf</button>
            `;
      bookshelf.appendChild(bookItem);
    });
  }
}

function addToBookshelf(index) {
  const selectedBook = books[index];
  if (!myBookshelfList.find((book) => book.id === selectedBook.id)) {
    myBookshelfList.push({
      id: selectedBook.id,
      title: selectedBook.volumeInfo.title,
      author: selectedBook.volumeInfo.authors
        ? selectedBook.volumeInfo.authors.join(', ')
        : 'Unknown Author',
    });

    localStorage.setItem('myBookshelfList', JSON.stringify(myBookshelfList));
    //https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
    //https://www.w3schools.com/js/js_json_stringify.asp
    displayBookshelf();
  } else {
    alert('Book already in Bookshelf');
  }
}
//Removes book from bookshelf
function removeFromBookshelf(bookId) {
  myBookshelfList = myBookshelfList.filter((book) => book.id !== bookId);
  localStorage.setItem('myBookshelfList', JSON.stringify(myBookshelfList));
  displayBookshelf();
}
displayBookshelf();
