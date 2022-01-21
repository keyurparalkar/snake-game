import { ChakraProvider, Container, Heading } from "@chakra-ui/react";
import { Provider } from "react-redux";
import CanvasBoard from "./components/CanvasBoard";
import Instruction from "./components/Instructions";
import ScoreCard from "./components/ScoreCard";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Container maxW="container.lg" centerContent>
          <Heading>SNAKE GAME</Heading>
          <ScoreCard />
          <CanvasBoard height={600} width={1000} />
          <Instruction/>
        </Container>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
