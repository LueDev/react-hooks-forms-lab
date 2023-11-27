import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
// import { SearchProvider } from "../context/search"


function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function addElement(newItem){
    setItems([...items, newItem]);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      {/* <SearchProvider> */}
        <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
        <ShoppingList items={items} addElement={addElement}/>  
      {/* </SearchProvider> */}
    </div>
  );
}

export default App;
