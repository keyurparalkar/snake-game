import { Provider } from "react-redux";
import CanvasBoard from "./components/CanvasBoard";
import ScoreCard from "./components/ScoreCard";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1> SNAKE GAME </h1>
        <CanvasBoard height={300} width={600}/>
        <ScoreCard />
      </div>
    </Provider>
  );
};

export default App;
