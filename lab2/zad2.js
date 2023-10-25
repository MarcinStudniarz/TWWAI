function sumPublicationYears(books) {
    var sum = 0;
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var book = books_1[_i];
        sum += book.publicationYear;
    }
    return sum;
}
var books = [
    { title: "Książka 1", author: "Autor 1", publicationYear: 2022 },
    { title: "Książka 2", author: "Autor 2", publicationYear: 2023 },
    { title: "Książka 3", author: "Autor 3", publicationYear: 2023 },
];
var totalPublicationYears = sumPublicationYears(books);
console.log("Suma lat publikacji wszystkich książek:", totalPublicationYears);
