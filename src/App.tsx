import { BrowserRouter, Route, Routes } from "react-router-dom";
import PreviewPage from "./pages/PreviewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PreviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
