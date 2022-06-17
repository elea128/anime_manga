import React, { useReducer } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getEvent } from "../api/evt";
import { EventDescription, Event } from "../api/types";

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
    <>
      {/* <form className="event-form" onSubmit={handleAddOrCreateEvent}>
        <Field label="Nom de l'évènement">
          <input
            name="name"
            className="input"
            type="text"
            placeholder="Nom de l'évènement"
            value={formData.name}
          />
        </Field>
        <Field label="Description">
          <textarea
            name="description"
            className="textarea"
            placeholder="Description de l'évènement ainsi que la date"
            value={formData.description}
          />
        </Field>

        <Field label="Lieu">
          <input
            name="adress"
            className="input"
            type="text"
            placeholder="Adresse/Lien de l'évènement"
            value={formData.adress}
          />
        </Field>

        {!!id && (
          <Field label="Extra actions">
            <button
              type="button"
              className="button is-warning"
              onClick={handleDeleteEvent}
            >
              Delete post
            </button>
          </Field>
        )}

        <div className="field is-grouped is-grouped-centered">
          <p className="control">
            <button type="submit" className="button is-primary">
              Valider
            </button>
          </p>
          <p className="control">
            <Link to="/" className="button is-light">
              Annuler
            </Link>
          </p>
        </div>
      </form> */}

      {/* Retourner seulement les valeurs de chaque event */}
      <div>
        <h3>Nom de l'event</h3>
        <p>{formData.name}</p>
      </div>

      <div>
        <h3>Description de l'event</h3>
        <p>{formData.description}</p>
      </div>

      <div>
        <h3>Adresse de l'event</h3>
        <p>{formData.adress}</p>
      </div>
    </>
  );
};

export default EditEvent;
