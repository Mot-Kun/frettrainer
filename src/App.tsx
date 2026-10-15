import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prototype from "./pages/Prototype";
import NoteQuizAll from "./pages/NoteQuizAll.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Prototype />} />
        <Route path="/quiz" element={<NoteQuizAll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;