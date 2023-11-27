import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit, newItem, newItemCategory, onNewItemChange, onNewItemCategoryChange}) {
  
  


  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={newItem}
          onChange={onNewItemChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={onNewItemCategoryChange} value={newItemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
