import { useState } from "react";
import Game from "./components/Game";
import Loading from "./components/Loading";

function App() {
  const [loader, setLoader] = useState(false);
  setTimeout(() => {
    setLoader(false);
  }, 6000);
  return <>{loader ? <Loading /> : <Game />}</>;
}

export default App;
