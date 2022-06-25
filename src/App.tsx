import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditEvent from "./components/EditEvent";
import NotFoundPage from "./components/NotFoundPage";
import DisplayEvent from "./components/DisplayEvent";
import FaqEvent from "./components/FaqEvent";
import ListFaq from "./components/ListFaq";
import Filtre from "./components/Filtre";

const App = () => (
  <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Filtre />} />
        <Route path="/event" element={<Filtre />} />
        <Route path="/event/new" element={<EditEvent />} />
        <Route path="/event/edit" element={<NotFoundPage />} />
        <Route path="/event/edit/:id" element={<EditEvent />} />
        <Route path="/event/:id" element={<DisplayEvent />} />
        <Route path="/faq" element={<ListFaq />} />
        <Route path="/faq/:id" element={<FaqEvent />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
