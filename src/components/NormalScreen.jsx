import ShoppingList from "./ShoppingList";

export default function NormalScreen({ list }) {
  return (
    <div>
      <ShoppingList list={list} />
    </div>
  );
}
