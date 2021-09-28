export default function addNewItem(id, itemName, itemPrice) {
  const newItem = {
    id: id,
    name: itemName,
    price: itemPrice,
    acquired: false,
  };
  return newItem;
}
