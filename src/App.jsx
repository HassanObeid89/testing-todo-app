import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import NormalScreen from "./components/NormalScreen";

import './css/styles.css';

export default function App() {
  const [list, setList] = useState([])
  return (
    <div className="App">
      {list.length === 0 ? <WelcomeScreen/> : <NormalScreen/>}
    </div>
  );
}
