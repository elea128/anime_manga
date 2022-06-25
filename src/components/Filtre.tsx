import axios from "axios";
import { any, props } from "cypress/types/bluebird";
import { data } from "cypress/types/jquery";
import React, { useEffect, useState } from "react";
import { getEvents } from "../api/evt";
// import Event from "./ItemEvent";
// import ItemEvent from "./ItemEvent";
import { Event } from "../api/types";
import "./filtre.css";
import search_bar from "./img/search.png";
import anime from "./img/anime.jpeg";
import { Link } from "react-router-dom";

function Filtre() {
  const [data, setData] = useState<Array<Event>>([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    loadEventData();
  }, []);

  const loadEventData = async () => {
    return await axios
      .get("http://localhost:3004/event")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };

  console.log("Data", data);

  const handleSearch = async (e: any) => {
    e.preventDefault();
    return await axios
      .get(`http://localhost:3004/event?q=${value}`)
      .then((response) => {
        setData(response.data);
        setValue("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="main_section">
      <h1 className="title">Mes évènements</h1>

      <br />

      <form className="search_bar" onSubmit={handleSearch}>
        <div className="search-box">
          <button className="btn-search">
            <i className="fas fa-search"></i>
            <img id="img_search" src={search_bar} alt="search" />
          </button>
          <input
            type="text"
            className="input-search"
            placeholder="Chercher un évènement"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <br />
      </form>

      <br />

      {data.length === 0 ? (
        <div>
          <div> Aucun évènement trouvé... </div>
        </div>
      ) : (
        data.map((item, id) => (
          <div key={id}>
            <div className="big">
              <article className="recipe">
                <div className="pizza-box">
                  <img src={item.url} width="1500" height="1368" alt="" />
                </div>
                <div className="recipe-content">
                  <p className="recipe-tags">
                    <span className="recipe-tag">Id:{item.id}</span>
                  </p>

                  <Link to={`/event/${id + 1}`}>
                    <h1 className="recipe-title">{item.name}</h1>{" "}
                  </Link>

                  <p className="recipe-metadata">
                    <span className="recipe-rating">
                      ★★★★<span>☆</span>
                    </span>
                    <span className="recipe-votes">(12 votes)</span>
                  </p>

                  <p className="recipe-desc">{item.description}</p>
                  <p className="recipe-desc">{item.adress}</p>

                  <Link to={`/event/edit/${id + 1}`}>
                    <button className="recipe-save" type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#000000"
                      >
                        <path
                          d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z"
                          fill="currentColor"
                        />
                      </svg>
                      Edit
                    </button>
                  </Link>
                </div>
              </article>
            </div>
          </div>
        ))
      )}
    </section>
  );
}

export default Filtre;
