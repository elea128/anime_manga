import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditEvent from "./components/EditEvent";
import NotFoundPage from "./components/NotFoundPage";
// import ItemEvent from "./components/ItemEvent";
import ListEvent from "./components/ListEvent";
// import FAQ from "./components/faq";

const App = () => (
  <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<ListEvent />} />
        <Route path="/event/new" element={<EditEvent />} />
        {/* <Route path="/event/ :id" element={<ItemEvent />} /> */}
        <Route path="*" element={<NotFoundPage />} />
        {/* <Route path="/FAQ" element={<FAQ />} /> */}
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
