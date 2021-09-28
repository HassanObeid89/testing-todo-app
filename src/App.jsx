import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import NormalScreen from "./components/NormalScreen";
import ModalContainer from './components/ModalContainer';
import './css/styles.css';

export default function App() {
  const [list, setList] = useState([])
  const [modal, setModal] = useState(null)
  return (
    <div className="App">
      {list.length === 0 ? <WelcomeScreen setModal={setModal} modal={modal} list={list} setList={setList} /> : <NormalScreen setList={setList} list={list} setModal={setModal}/>}
      <ModalContainer modal={modal} setModal={setModal} />
    </div>
  );
}
