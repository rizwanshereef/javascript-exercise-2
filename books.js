objBooks = [
    {
        book_id: 2314,
        title: 'My experiments with Truth',
        author: 'Mahatama Gandhi',
        status: false
    },
    {
        book_id: 7864,
        title: 'Origin of species',
        author: 'Charles Darwin',
        status: false
    },
    {
        book_id: 1524,
                title: 'Geetanjali',
        author: 'Rabindra Nath Tagore',
        status: true
    },
    {
        book_id: 0981,
        title: 'Le Contract Social',
        author: 'Jean Jacques Rousseau',
        status: true
    }];

// function to rearrange book on BookTitle
function reArrangeWithBookTitle(){
    var givenObjectTitle = objBooks;
    console.log("\nArranging array - book name\n");
    givenObjectTitle.sort((a, b) => {
        let fna = a.title.toLowerCase(),
            fnb = b.title.toLowerCase();
        if (fna < fnb) {
            return -1;
        }
        if (fna > fnb) {
            return 1;
        }
        return 0;
    });
    console.log(givenObjectTitle);
}

// function to rearrange book on BookID

function reArrangeWithBookID(){
    var givenObjectBook_id = objBooks;
    console.log("Arranging array - book ID");
    givenObjectBook_id.sort((a, b) => {
       return a.book_id - b.book_id;
    });
    console.log(givenObjectBook_id);
}

// function to remove duplicate data
function removeDuplicates(){
    var givenObject = objBooks;
    console.log("Removing duplicates");
    const removedDuplicatesArray = Array.from(new Set(givenObject.map(a => a.book_id)))
     .map(book_id => {
       return givenObject.find(a => a.book_id === book_id)
     })
    console.log(removedDuplicatesArray);
}

reArrangeWithBookTitle();
reArrangeWithBookID();
removeDuplicates();
