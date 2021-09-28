import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import WelcomeScreen from "./components/WelcomeScreen";
import NormalScreen from "./components/NormalScreen";
import ModalContainer from "./components/ModalContainer";
import { listState } from "./state/listState";
import "./css/styles.css";

export default function App() {
  const [list, setList] = useRecoilState(listState);
  const [modal, setModal] = useState(null);
  const STORAGE_KEY = "shoppingList";

  function loadData(storageKey, setList) {
    const data = localStorage.getItem(storageKey);
    const parseddata = JSON.parse(data) ?? [];
    setList(parseddata);
  }

  function saveData(storageKey, list) {
    const stringifyList = JSON.stringify(list);
    localStorage.setItem(storageKey, stringifyList);
  }

  useEffect(() => loadData(STORAGE_KEY, setList), [setList]);
  useEffect(() => saveData(STORAGE_KEY, list), [list]);

  return (
    <div className="App">
      {list.length === 0 ? (
        <WelcomeScreen setModal={setModal} />
      ) : (
        <NormalScreen setModal={setModal} />
      )}
      <ModalContainer modal={modal} setModal={setModal} />
    </div>
  );
}
