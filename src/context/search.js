// src/context/search.js
import React, {useState} from 'react';

const SearchContext = React.createContext();

// create a provider component
function SearchProvider({ children }) {

    const [searchItem, setSearchItem] = useState(null);

    // this value will be available to child components of this provider
    return <SearchContext.Provider value={{searchItem, setSearchItem}}>{children}</SearchContext.Provider>;
  }
  
  export { SearchContext, SearchProvider };