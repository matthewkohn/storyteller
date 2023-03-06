import { useContext, useEffect, useState } from 'react';
import { GenreContext } from '../context/GenreContext';

const useBookshelfFilter = (stories, type, value) => {
  const [filteredStories, setFilteredStories] = useState([]);
  const { chosenGenre } = useContext(GenreContext);
console.log(stories)

  useEffect(() => {
    if (type === "search" && value !== "") {
      setFilteredStories(stories);
    } else if (type === "search") {
      const storiesByTitle = stories.filter((story) => {
        console.log("storiesByTitle story: ", story)
//
        return story.title.includes(value);
      })
      setFilteredStories(storiesByTitle);
    } else if (type === "sort-by-genre" && chosenGenre.id) {
      const storiesByGenre = stories.filter((story) => {
        console.log("storiesByGenre story: ", story)
//
        return story.genre.includes(value);
      })
      setFilteredStories(storiesByGenre);
    } else if (type === "sort-alpha") {
      const storiesAlphabetically = stories.sort((a, b) => a.title - b.title);
      setFilteredStories(storiesAlphabetically);
    }
  }, []);

  // searchbar
  // type="search", value={e.target.value}, onChange={handleChange}

  // sort myStories by genre
  // type="sort-by-genre", value={chosenGenre}

  // sort myStories by A-Z
  // type="sort-alpha", onToggle={boolean}

  // sort allStories by A-Z
  

  return [filteredStories]
}

export default useBookshelfFilter