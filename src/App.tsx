import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditEvent from "./components/EditEvent";
import NotFoundPage from "./components/NotFoundPage";
import ListEvent from "./components/ListEvent";
import DisplayEvent from "./components/DisplayEvent";
import FaqEvent from "./components/FaqEvent";
import ListFaq from "./components/ListFaq";

// import FAQ from "./components/faq";

const App = () => (
  <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<ListEvent />} />
        <Route path="/event" element={<ListEvent />} />
        <Route path="/event/new" element={<EditEvent />} />
        <Route path="/event/edit/:id" element={<EditEvent />} />
        <Route path="/event/:id" element={<DisplayEvent />} />
        <Route path="/faq" element={<ListFaq />} />
        <Route path="/faq/:id" element={<FaqEvent />} />
        {/* <Route path="/event/:id" element={<EditEvent />} /> */}
        <Route path="*" element={<NotFoundPage />} />
        {/* <Route path="/FAQ" element={<FAQ />} /> */}
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
