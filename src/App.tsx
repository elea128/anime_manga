import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditEvent from "./components/EditEvent";

const App = () => (
  <BrowserRouter>
    <div>
      <Routes>
        <Route path="/event/new" element={<EditEvent />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
