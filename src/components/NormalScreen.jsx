import ShoppingList from "./ShoppingList";
import ButtonAddItem from './ButtonAddItem'
export default function NormalScreen({ list,setList,setModal }) {
  return (
    <div>
      <ShoppingList list={list} />
      <ButtonAddItem setList={setList} list={list} setModal={setModal} />
    </div>
  );
}
