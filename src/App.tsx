import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import EditEvent from "./components/EditEvent";
import NotFoundPage from "./components/404";
import DisplayEvent from "./components/DisplayEvent";
import FaqEvent from "./components/FaqEvent";
import ListFaq from "./components/ListFaq";
import Filtre from "./components/Filtre";

const App = () => (
  <BrowserRouter>
    <section>
      <ul id="ul_nav_bar">
        <Link to={`/`}>
          <li className="navBar">Accueil</li>
        </Link>
        <Link to={`/event/new`}>
          <li className="navBar">Créer un évènement</li>
        </Link>
        <Link to={`/faq`}>
          <li className="navBar">FAQ</li>
        </Link>
      </ul>
    </section>
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
