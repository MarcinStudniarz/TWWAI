interface Book {
    title: string;
    author: string;
    publicationYear: number;
}


function sumPublicationYears(books: Book[]): number {
    let sum = 0;
    for (const book of books) {
        sum += book.publicationYear;
    }
    return sum;
}


const books: Book[] = [
    { title: "Książka 1", author: "Autor 1", publicationYear: 2022 },
    { title: "Książka 2", author: "Autor 2", publicationYear: 2023 },
    { title: "Książka 3", author: "Autor 3", publicationYear: 2023 },
];


const totalPublicationYears = sumPublicationYears(books);
console.log("Suma lat publikacji wszystkich książek:", totalPublicationYears);
