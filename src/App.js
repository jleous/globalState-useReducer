import { Components } from "./components/Components";
import StoreProvider from "./store/StoreProvider";

function App() {
  return (
    <StoreProvider>
      <Components />
    </StoreProvider>
  );
}

export default App;
