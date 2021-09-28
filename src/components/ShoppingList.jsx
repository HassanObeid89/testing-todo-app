import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({ list }) {
  const items = list.map((item) => <ShoppingItem item={item} />);
  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
}
