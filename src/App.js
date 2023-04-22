import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Callback from "./component/Callback";
import Context from "./component/Context";
import Effect from "./component/Effect";
import LayoutEffect from "./component/LayoutEffect";
import Memo from "./component/Memo";
import Reducer from "./component/Reducer";
import Ref from "./component/Ref";
import State from "./component/State";
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
