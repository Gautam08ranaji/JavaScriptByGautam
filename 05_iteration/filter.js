// const arr = ["coding","java script","pyhthon", "java"]

//  const values = arr.forEach(element => {
//     console.log(element);

//  });

//  console.log(values);// for eaxh do not return anything

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => num > 5);

console.log(newNums);

const newVar = myNums.filter((num) => {
  return num > 4;
});

console.log(newVar);

const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian",
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Classic",
  },
  {
    id: 4,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    genre: "Fiction",
  },
  {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Romance",
  },
  {
    id: 6,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasy",
  },
  {
    id: 7,
    title: "The Book Thief",
    author: "Markus Zusak",
    year: 2005,
    genre: "Historical Fiction",
  },
  {
    id: 8,
    title: "Moby Dick",
    author: "Herman Melville",
    year: 1851,
    genre: "Adventure",
  },
  {
    id: 9,
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    genre: "Philosophical",
  },
];

const bookValues = books.filter((bk) => {
  // return bk.genre == "Fiction" && bk.author =="J.D. Salinger"
  // return bk.year >= 1900 && bk.year <= 2000
  // return bk.title.length >15
  // return bk.genre.includes("Fiction")
  // return bk.year >= 1900 && bk.year <= 2000 && bk.genre != "Fiction"
  //   const parts = bk.author.trim().split(" ");
  //   const lastName = parts[parts.length-1]
  //   return lastName.startsWith("C")
  //   console.log(parts);
  // return pa
  // rts.length > 2
  // const nameParts = bk.author.trim().split(" ");
  // return nameParts.some(part => /^[A-Z]\.$/.test(part));

  const nameParts = bk.author.trim().split(/[\s.]+/);
  return nameParts.some((part) => /^[A-Z]$/.test(part));
});

console.log(bookValues);
