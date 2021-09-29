import uuid from "uuid/dist/v4";
export default function addNewItem(itemName, itemPrice,setModal) {
  const newItem = {
    id: uuid(),
    name: itemName,
    price: itemPrice,
    acquired: false,
  };
  setModal(null)
  return newItem;
}
