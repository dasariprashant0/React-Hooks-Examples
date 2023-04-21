import Callback from "./component/Callback";
import Context from "./component/Context";
import Effect from "./component/Effect";
import LayoutEffect from "./component/LayoutEffect";
import Memo from "./component/Memo";
import Reducer from "./component/Reducer";
import Ref from "./component/Ref";
import State from "./component/State";


function App() {
  return (
    <div className="App">
      <hr />
      <State />
      <hr />
      <Effect />
      <hr />
      <Context />
      <hr />
      <Ref />
      <hr />
      <Reducer />
      <hr />
      <Memo />
      <hr />
      <Callback />
      <hr />
      <LayoutEffect />
      <hr />
    </div>
  );
}

export default App;
