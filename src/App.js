import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { Admin, Home } from "./pages";

function App({ customTheme }) {
  return (
    <Router>
      <ChakraProvider theme={customTheme}>
        <ColorModeScript
          initialColorMode={customTheme.config.initialColorMode}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;
