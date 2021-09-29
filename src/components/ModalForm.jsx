import { useState } from "react";
import { useRecoilState } from "recoil";
import { listState } from "../state/listState";
import addNewItem from "../scripts/addNewItem";
export default function ModalForm({ setModal }) {
  const [list, setList] = useRecoilState(listState);
  const [itemName, setName] = useState("");
  const [itemPrice, setPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = addNewItem(itemName, itemPrice);
    if (newItem !== null) setList([...list, newItem]);
    setModal(null);
  };

  return (
    <div className='modalForm'>
      <form onSubmit={handleSubmit}>
        <label>Item name</label>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setName(e.target.value)}
          placeholder='Sofa'
        />
        <label>Item price</label>
        <input
          type="number"
          value={itemPrice}
          onChange={(e) => setPrice(e.target.value)}
          placeholder='999:-'
        />
        <div className='button-wrapper'>
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
