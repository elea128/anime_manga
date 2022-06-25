import React, { useReducer } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getEvent } from "../api/evt";
import { EventDescription, Event } from "../api/types";
import { Link } from "react-router-dom";

type FormData = { name: string; value: string | undefined | Number };

const formReducer = (state: Event | EventDescription, event: FormData) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

const EditEvent = () => {
  const [formData, setFormData] = useReducer(
    formReducer,
    {} as Event | EventDescription
  );
  let { id } = useParams(); // event id from url

  async function _getEvent(id: number) {
    const data = await getEvent(id);
    convertToFormData(data);
  }
  useEffect(() => {
    //chaquef fois que l'id change
    _getEvent(Number(id));
  }, [id]);

  function convertToFormData(event: Event): void {
    // helper to convert event data into formData
    // use it before set formData with API data
    // ex: convertToFormData(data):
    (Object.keys(event) as Array<keyof typeof event>).map((key) => {
      setFormData({
        name: key,
        value: event[key],
      });
    });
  }

  return (
    <div className="big">
      <article className="recipe">
        <div className="pizza-box">
          <img src={formData.url} width="1500" height="1368" alt="" />
        </div>
        <div className="recipe-content">
          <p className="recipe-tags">
            <span className="recipe-tag">Id:{formData.adress}</span>
          </p>

          <Link to={`/`}>
            <h1 className="recipe-title">{formData.name}</h1>{" "}
          </Link>

          <p className="recipe-metadata">
            <span className="recipe-rating">
              ★★★★<span>☆</span>
            </span>
            <span className="recipe-votes">(12 votes)</span>
          </p>

          <p className="recipe-desc">{formData.description}</p>
          <p className="recipe-desc">{formData.adress}</p>

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
            Save
          </button>
        </div>
      </article>
    </div>
  );
};

export default EditEvent;
