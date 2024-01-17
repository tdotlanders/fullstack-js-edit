import React, { useState } from "react";

function TodoListPage() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItem] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setItem([...items, inputValue]);
    setInputValue("");
  };
  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItem(updatedItems);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button type="submit">Adicionar</button>
        </form>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li onClick={() => removeItem(index)} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default TodoListPage;
