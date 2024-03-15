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
      title: "javascript",
      createdAt: "2024-04-13T20:43:34.067Z",
      completed: false,
    },
  ];
  
  
  function sortAndFilterNotes(sortCriteria, filterByTitle, filterByCompleted) {
    // 1. Clone the notesList :
    let sortedAndFilteredNotes = [...notesList];
  
    // 2. Sorting Nots :
    if (sortCriteria) {
      sortedAndFilteredNotes.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
  
        if (sortCriteria === "ascending") {
          return dateA - dateB; // aval be akhar
        } else if (sortCriteria === "descending") {
          return dateB - dateA; // akhar be aval
        } else {
          throw new Error("Invalid sort criteria. Must be 'ascending' or 'descending'.");
        }
      });
    }
  
    // 3.  filterByTitle and filterByCompleted
    if (filterByTitle || typeof filterByCompleted !== "undefined") {
      sortedAndFilteredNotes = sortedAndFilteredNotes.filter((note) => {
        let shouldInclude = true; 
  
        if (filterByTitle) {
          shouldInclude = note.title.toLowerCase().includes(filterByTitle.toLowerCase());
        }
  
        if (typeof filterByCompleted !== "undefined") {
          shouldInclude = shouldInclude && (note.completed === filterByCompleted); // AND both conditions
        }
  
        return shouldInclude;
      });
    }
  
    return sortedAndFilteredNotes;
  }
  
  // Example :
  const sortedByDateAscending = sortAndFilterNotes("ascending");
  console.log(sortedByDateAscending);
  
  const filteredByCompleted = sortAndFilterNotes(null, null, true); // Filter completed notes
  console.log(filteredByCompleted);
  
  const filteredByTitleAndNotcompleted = sortAndFilterNotes("ascending", "javascript", false);
  console.log(filteredByTitleAndNotcompleted);
  