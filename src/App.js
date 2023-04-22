import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Callback from "./component/useCallback";
import Context from "./component/UseContext/useContext";
import Effect from "./component/UseEffect/useEffect";
import LayoutEffect from "./component/LayoutEffect";
import Memo from "./component/Memo";
import Reducer from "./component/UseReducer/useReducer";
import Ref from "./component/Ref";
import State from "./component/UseState/useState";
import Home from "./component/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useState" element={<State />} />
          <Route path="/useEffect" element={<Effect />} />
          <Route path="/useContext" element={<Context />} />
          <Route path="/useRef" element={<Ref />} />
          <Route path="/useReducer" element={<Reducer />} />
          <Route path="/useMemo" element={<Memo />} />
          <Route path="/useCallback" element={<Callback />} />
          <Route path="/useLayoutEffect" element={<LayoutEffect />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
