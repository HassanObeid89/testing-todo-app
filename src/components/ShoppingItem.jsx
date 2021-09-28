export default function ShoppingItem({ item, editList }) {
  const { name, price, acquired } = item;
  function editItem(key, editedValue) {
    const editedItem = { ...item };

    editedItem[key] = editedValue;
    editList(editedItem);
  }
  return (
    <div>
      <input
        type="checkbox"
        checked={acquired}
        onChange={() => editItem("acquired", !acquired)}
      />
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
}
