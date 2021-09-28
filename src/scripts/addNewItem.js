import uuid from "uuid/dist/v4";
export default function addNewItem(itemName, itemPrice) {
  const newItem = {
    id: uuid(),
    name: itemName,
    price: itemPrice,
    acquired: false,
  };
  return newItem;
}
