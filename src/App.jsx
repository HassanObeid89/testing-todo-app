import { useState } from "react";
import { useRecoilState } from "recoil";
import WelcomeScreen from "./components/WelcomeScreen";
import NormalScreen from "./components/NormalScreen";
import ModalContainer from "./components/ModalContainer";
import { listState } from "./state/listState";
import "./css/styles.css";

export default function App() {
  const [list, setList] = useRecoilState(listState);
  const [modal, setModal] = useState(null);
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
