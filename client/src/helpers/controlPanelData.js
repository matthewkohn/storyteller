const alphabetize = (stories) => {
  return [...stories].sort((a, b) => {
    let titleA = a.title.toUpperCase();
    let titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });
};

const categories = ['sort by', 'All Stories', 'My Stories'];

const initialSortState = {
  category: categories[1],
  genre: {},
  isAlphabetized: false
};

const urls = {
  allStories: `/stories`,
  myStories: `/stories-by-user`,
  genres: '/genres'
};



export { alphabetize, categories, initialSortState, urls };