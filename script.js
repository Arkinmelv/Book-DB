const data = [
    {
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "imageLink": "images/things-fall-apart.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958
    },
    {
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "imageLink": "images/fairy-tales.jpg",
        "language": "Danish",
        "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836
    },
    {
        "author": "Dante Alighieri",
        "country": "Italy",
        "imageLink": "images/the-divine-comedy.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
        "pages": 928,
        "title": "The Divine Comedy",
        "year": 1315
    },
    {
        "author": "Unknown",
        "country": "Sumer and Akkadian Empire",
        "imageLink": "images/the-epic-of-gilgamesh.jpg",
        "language": "Akkadian",
        "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
        "pages": 160,
        "title": "The Epic Of Gilgamesh",
        "year": -1700
    },
    {
        "author": "Unknown",
        "country": "Achaemenid Empire",
        "imageLink": "images/the-book-of-job.jpg",
        "language": "Hebrew",
        "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
        "pages": 176,
        "title": "The Book Of Job",
        "year": -600
    },
    {
        "author": "Unknown",
        "country": "India/Iran/Iraq/Egypt/Tajikistan",
        "imageLink": "images/one-thousand-and-one-nights.jpg",
        "language": "Arabic",
        "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
        "pages": 288,
        "title": "One Thousand and One Nights",
        "year": 1200
    },
    {
        "author": "Unknown",
        "country": "Iceland",
        "imageLink": "images/njals-saga.jpg",
        "language": "Old Norse",
        "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
        "pages": 384,
        "title": "Nj\u00e1l's Saga",
        "year": 1350
    },
    {
        "author": "Jane Austen",
        "country": "United Kingdom",
        "imageLink": "images/pride-and-prejudice.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
        "pages": 226,
        "title": "Pride and Prejudice",
        "year": 1813
    },
    {
        "author": "Honor\u00e9 de Balzac",
        "country": "France",
        "imageLink": "images/le-pere-goriot.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
        "pages": 443,
        "title": "Le P\u00e8re Goriot",
        "year": 1835
    },
    {
        "author": "Samuel Beckett",
        "country": "Republic of Ireland",
        "imageLink": "images/molloy-malone-dies-the-unnamable.jpg",
        "language": "French, English",
        "link": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
        "pages": 256,
        "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
        "year": 1952
    },
    {
        "author": "Giovanni Boccaccio",
        "country": "Italy",
        "imageLink": "images/the-decameron.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/The_Decameron\n",
        "pages": 1024,
        "title": "The Decameron",
        "year": 1351
    },
    {
        "author": "Jorge Luis Borges",
        "country": "Argentina",
        "imageLink": "images/ficciones.jpg",
        "language": "Spanish",
        "link": "https://en.wikipedia.org/wiki/Ficciones\n",
        "pages": 224,
        "title": "Ficciones",
        "year": 1965
    },
    {
        "author": "Emily Bront\u00eb",
        "country": "United Kingdom",
        "imageLink": "images/wuthering-heights.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
        "pages": 342,
        "title": "Wuthering Heights",
        "year": 1847
    },
];


const app = document.getElementById('app');
const modal = document.getElementById('myModal');
const bookForm = document.getElementById('bookForm');
const addButton = document.getElementById('addButton');
const closeModalButton = document.getElementsByClassName('close')[0];

const modalUpdated = document.getElementById('updatedModal');
const updateForm = document.getElementById('updateForm');

function renderTable() {
    app.innerHTML = ''; // Clear the app div before rendering

    const table = document.createElement('table');
    table.className = 'table-auto m-4';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    for (const key in data[0]) {
        const th = document.createElement('th');
        th.className = 'px-4 py-2';
        th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
        headerRow.appendChild(th);
    }

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    data.forEach(item => {
        const row = document.createElement('tr');

        for (const key in item) {
            const cell = document.createElement('td');
            cell.className = 'border px-4 py-2';
            cell.textContent = item[key];
            row.appendChild(cell);
        }

        const deleteCell = document.createElement('td');
        deleteCell.className = 'border px-4 py-2';

        const deleteButton = document.createElement('button');
        deleteButton.className = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteBook(item));

        const updateButton = document.createElement('button');
        updateButton.className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';
        updateButton.textContent = 'Update';
        updateButton.addEventListener('click', () => openUpdateModal(item));

        deleteCell.appendChild(deleteButton);
        deleteCell.appendChild(updateButton);
        row.appendChild(deleteCell);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    app.appendChild(table);
}
// Initial rendering of the table
renderTable();

function deleteBook(book) {
    const index = data.indexOf(book);
    if (index !== -1) {
        data.splice(index, 1);
        renderTable();
    }
}

// Function to open the modal and set it up for updating
let bookToUpdate = null;
function openUpdateModal(book) {
    bookToUpdate = book
    modalUpdated.style.display = "block";
    // Set the hidden bookId input (as shown in the previous response).
    document.getElementById('authorInputUpdate').value = book["author"],
    document.getElementById('countryInputUpdate').value = book["country"],
    document.getElementById('imageLinkInputUpdate').value = book["imageLink"],
    document.getElementById('languageInputUpdate').value = book["language"],
    document.getElementById('linkInputUpdate').value = book["link"],
    document.getElementById('pagesInputUpdate').value = book["pages"],
    document.getElementById('titleInputUpdate').value = book["title"],
    document.getElementById('yearInputUpdate').value = book["year"]

}

updateForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (bookToUpdate) {
        // Get the updated data from the input fields
        const updatedBookData = {
            author: document.getElementById('authorInputUpdate').value,
            country: document.getElementById('countryInputUpdate').value,
            imageLink: document.getElementById('imageLinkInputUpdate').value,
            language: document.getElementById('languageInputUpdate').value,
            link: document.getElementById('linkInputUpdate').value,
            pages: parseInt(document.getElementById('pagesInputUpdate').value),
            title: document.getElementById('titleInputUpdate').value,
            year: parseInt(document.getElementById('yearInputUpdate').value)
        };

        Object.assign(bookToUpdate, updatedBookData);
        bookToUpdate = null;
        modalUpdated.style.display = 'none';
        renderTable();
    }
});

addButton.addEventListener('click', function () {
    modal.style.display = 'block';
});

closeModalButton.addEventListener('click', function () {
    modal.style.display = 'none';
});

bookForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newBook = {
        author: document.getElementById('authorInput').value,
        country: document.getElementById('countryInput').value,
        imageLink: document.getElementById('imageLinkInput').value,
        language: document.getElementById('languageInput').value,
        link: document.getElementById('linkInput').value,
        pages: parseInt(document.getElementById('pagesInput').value),
        title: document.getElementById('titleInput').value,
        year: parseInt(document.getElementById('yearInput').value)
    };

    data.push(newBook);
    modal.style.display = 'none';
    renderTable();
});

