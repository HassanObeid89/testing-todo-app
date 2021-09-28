import { useState } from "react";
import uuid from "uuid/dist/v4";
import addNewItem from "../scripts/addNewItem";
export default function ModalForm({ list, setList, setModal }) {
  const [itemName, setName] = useState("");
  const [itemPrice, setPrice] = useState("");

  const handleSubmit = (event) => {
    const id = uuid();
    event.preventDefault();
    const newItem = addNewItem(id, itemName, itemPrice);
    if (newItem !== null) setList([...list, newItem]);
    setModal(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          value={itemPrice}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}