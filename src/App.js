import Counter from "./components/counter/Counter";
import Logo from "./components/logo/Logo";
import { CountContextProvider } from "./context/CountContext";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <CountContextProvider>
        <Counter />
        <Logo />
      </CountContextProvider>

      <GlobalStyle />
    </>
  );
}

export default App;
