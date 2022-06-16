import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditEvent from "./components/EditEvent";
import NotFoundPage from "./components/NotFoundPage";
import ListEvent from "./components/ListEvent";

const App = () => (
  <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<ListEvent />} />
        <Route path="/event/new" element={<EditEvent />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
