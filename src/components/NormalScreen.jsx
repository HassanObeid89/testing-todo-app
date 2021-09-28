
import { useRecoilState } from "recoil";
import { listState } from "../state/listState";
import ShoppingList from "./ShoppingList";
import ButtonAddItem from './ButtonAddItem'
export default function NormalScreen({ setModal }) {
  const [list] = useRecoilState(listState);
  return (
    <div>
      <ShoppingList list={list} />
      <ButtonAddItem setModal={setModal} />
    </div>
  );
}
