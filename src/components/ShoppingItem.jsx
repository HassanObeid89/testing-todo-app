import Checkbox from "./Checkbox";

export default function ShoppingItem({ item }) {
  return (
    <div>
      <Checkbox />
      <p>{item.name}</p>
      <p>{item.price}</p>
    </div>
  );
}
