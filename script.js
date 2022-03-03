// Selection of DOM Elements
const mainContent = document.querySelector(".main-content");
const addBookBtn = document.querySelector("#addBookBtn");
const openFormButton = document.querySelector(".openFormButton");
const form = document.querySelector("#form");

// Event Listeners
addBookBtn.addEventListener("click", addBookToLibrary);
openFormButton.addEventListener("click", formHidden_orVisible);

const myLibrary = [];
let nextBookId = 1;

function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

function addBookToLibrary() {
  title = document.getElementById("title").value;
  author = document.getElementById("author").value;
  pages = document.getElementById("pages").value;
  read = document.getElementById("pages_read").value;

  let book = new Book(title, author, pages, read, nextBookId);
  myLibrary.push(book);
  nextBookId++;
  createTable();
}

function createTable() {
  let html = `<table border='1|1'>`;

  html += `
          <tr>
            <th>  TITLE  </th>
            <th>  AUTHOR  </th>
            <th>  PAGES  </th>
            <th>  HAVE YOU READ IT?  </th>
            <th>  Remove Row </th>`;
  for (var i = 0; i < myLibrary.length; i++) {
    html += `
            <tr data-id="${myLibrary[i].id}" id="removeRows">
              <td> ${myLibrary[i].title}  </td>
              <td> ${myLibrary[i].author}  </td>
              <td> ${myLibrary[i].pages}  </td>
              <td id="fourth-row"> <button class="readStatus" id="${myLibrary[i].read}" onclick=changeStatus(this.id)> Read </button>  </td>
              <td> <button class=removeRowBtn id="${myLibrary[i].id}" onclick=removeRow(this.id)>Delete Row</button>  </td>`;
    html += `</tr>`;
  }

  html += `</table>`;
  mainContent.innerHTML = html;
}

function getBookIndex(id) {
  return (index = myLibrary.findIndex((book) => {
    return book.nextBookId === id;
  }));
}

function removeBookFromArray(id) {
  if (getBookIndex(id) < 0) {
    return;
  } else myLibrary.splice(getBookIndex(id), 1);
}

function removeRow(id) {
  const rowRemoval = document.getElementById(id).parentNode.parentNode;
  rowRemoval.remove();
  removeBookFromArray();
}

function changeStatus() {}

function formHidden_orVisible() {
  if (form.style.visibility == "visible") {
    form.style.visibility = "hidden";
  } else form.style.visibility = "visible";
}

function formVisible() {
  form.style.visibility = "visible";
}

function formHidden() {
  form.style.visibility = "hidden";
}
