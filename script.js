const myLibrary = [];
let nextBookId = 1;

function Books(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

// Selecting the button and adding an event listener.
document
  .getElementById("addBooks-btn")
  .addEventListener("click", addBookToLibrary);

// Function to run when the button is clicked
function addBookToLibrary() {
  title = document.getElementById("title").value;
  author = document.getElementById("author").value;
  pages = document.getElementById("pages").value;
  read = document.getElementById("pages_read").value;

  let book = new Books(title, author, pages, read, nextBookId);
  myLibrary.push(book);
  nextBookId++;
  createTable();
}

// A function which creates a table everytime the user inputs his values.
function createTable() {
  let html = "<table border='1|1'>";

  html += `<tr>`;
  html += `<th>  TITLE  </th>`;
  html += `<th>  AUTHOR  </th>`;
  html += `<th>  PAGES  </th>`;
  html += `<th>  HAVE YOU READ IT?  </th>`;
  html += `<th>  Remove Row </th>`;
  for (var i = 0; i < myLibrary.length; i++) {
    html += `<tr data-id="${myLibrary[i].id}" id="removeRows">`;
    html += `<td> ${myLibrary[i].title}  </td>`;
    html += `<td> ${myLibrary[i].author}  </td>`;
    html += `<td> ${myLibrary[i].pages}  </td>`;
    html += `<td> ${myLibrary[i].read}  </td>`;
    html += `<td> <button class=removeRowBtn id="removeRowBtn" onclick=removeRow()>Delete Row</button>  </td>`;
    html += `</tr>`;
  }

  html += `</table>`;
  document.getElementById("box").innerHTML = html;
}

// Related to opening and closing the form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

document.querySelector(".button-53").addEventListener("click", openForm);
document.querySelector("#cancelBooks-btn").addEventListener("click", closeForm);
// Finished with opening and closing the form.

// Function for finding the book ID.
function getBookIndex(id) {
  return (index = myLibrary.findIndex((book) => {
    return book.nextBookId === id;
  }));
}

// Once the book ID has been found,add it in the function for removing the book object from the row
function removeBookFromRow(id) {
  //if the value returned in getBookIndex is less than 0, don't do anything.
  if (getBookIndex(id) < 0) {
    return;
  }
  //if the value returned is higher than 0, then based on that value, remove the object.
  else myLibrary.splice(getBookIndex(id), 1);
}

// Creating a remove row button function
function removeRow() {
  //getting the parent node i.e the row of the `Delete Row button`
  const rowRemoval =
    document.getElementById("removeRowBtn").parentNode.parentNode;

  //Removing the row
  rowRemoval.remove();

  //Call the function for removing the book object from that row
  removeBookFromRow();
}
