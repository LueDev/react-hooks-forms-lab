import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, addElement }) {
  const [searchCategory, setSearchCategory] = useState("All");
  const [search, setSearch] = useState("")
  const [newItem, setNewItem] = useState("")
  const [newItemCategory, setNewItemCategory] = useState("Produce")

  function handleSearchCategoryChange(event) {
    setSearchCategory(event.target.value);
  }

  function handleSearchChange(event){
    setSearch(event.target.value)
  }  
  
  function handleNewItem(event){
    setNewItem(event.target.value)
  }
  
  function handleNewItemCategory(event){
    setNewItemCategory(event.target.value)
  }

  function handleNewItemSubmit(event){
    event.preventDefault()
    const addItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: newItem,
      category: newItemCategory,
    };

    setNewItem('')
    setNewItemCategory("Produce")

    addElement(addItem)
    // console.log(addItem)
    return addItem
  }

  const itemsToDisplay = items.filter((item) => {
    if (searchCategory === "All") return true;

    return item.category === searchCategory;
  });

  const itemsSearched = itemsToDisplay.filter((item) => {

    if (search === "") return true; 

    const regex = new RegExp(search)
    return regex.test(item.name.toLowerCase())
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleNewItemSubmit} newItem={newItem} newItemCategory={newItemCategory} onNewItemChange={handleNewItem} onNewItemCategoryChange={handleNewItemCategory}/>
      <Filter onCategoryChange={handleSearchCategoryChange} search={search} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsSearched.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
