const notesList = [
  {
    id: 1,
    title: "Coding JavaScript",
    createdAt: "2024-03-13T20:43:34.067Z",
    completed: false,
  },
  {
    id: 2,
    title: "Study physics",
    createdAt: "2024-02-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 3,
    title: "React.js intervew",
    createdAt: "2024-01-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 4,
    title: "Cooking",
    createdAt: "2024-04-13T20:43:34.067Z",
    completed: false,
  },
];


// Function to sort data by creation date (ascending or descending)
function sortByDate(data, order) {
  if (order !== "asc" && order !== "desc") {
    throw new Error("Invalid sort order. Must be 'asc' or 'desc'");
  }
  return data.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return order === "asc" ? dateA - dateB : dateB - dateA;
  });
}

// Function to search data by title
function searchByTitle(data, searchTerm) {
  const lowercaseTerm = searchTerm.toLowerCase();
  return data.filter((note) => note.title.toLowerCase().includes(lowercaseTerm));
}

// Function to filter data by completion status
function filterByCompletion(data, isCompleted) {
  return data.filter((note) => note.completed === isCompleted);
}

// Example :
const sortedAscending = sortByDate(notesList.slice(), "asc"); // Slice to avoid modifying original data
const filteredCompleted = filterByCompletion(notesList, true);
const searchForReact = searchByTitle(notesList, "React");

console.log(sortedAscending);
console.log(filteredCompleted);
console.log(searchForReact);
