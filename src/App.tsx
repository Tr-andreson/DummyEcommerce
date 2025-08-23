
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import { Provider } from "./provider";
import ProductPage from "./pages/ProductPage";

export function App() {
  return (
    <>
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ >
  );
}

export default App;
