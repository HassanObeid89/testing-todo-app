
import { useRecoilState } from "recoil";
import { listState } from "../state/listState";
import ShoppingList from "./ShoppingList";
import ButtonAddItem from './ButtonAddItem'
import Sorter from "./Sorter";
export default function NormalScreen({ setModal }) {
  const [list] = useRecoilState(listState);
  return (
    <div>
      <Sorter/>
      <ShoppingList list={list} />
      <ButtonAddItem setModal={setModal} />
    </div>
  );
}
