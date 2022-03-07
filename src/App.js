import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./pages";

function App({ customTheme }) {
  return (
    <Router>
      <ChakraProvider theme={customTheme}>
        <ColorModeScript
          initialColorMode={customTheme.config.initialColorMode}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={"Hey :)"} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;
