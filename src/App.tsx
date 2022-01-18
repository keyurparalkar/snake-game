import { Provider } from "react-redux";
import CanvasBoard from "./components/CanvasBoard";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1> SNAKE GAME </h1>
        <CanvasBoard />
      </div>
    </Provider>
  );
};

export default App;
