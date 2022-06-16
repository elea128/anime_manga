import React, { useReducer, useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getEvent, createEvent, deleteEvent } from "../api/evt";
import { EventDescription, Event } from "../api/types";
import Field from "../private/Field";

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
  const navigate = useNavigate(); // create a navigate function instance

  async function _getEvent(id: string) {
    const data = await getEvent(id);
    convertToFormData(data);
  }
  useEffect(() => {
    //chaquef osi que l'id change
    _getEvent(String(id));
  }, [id]);

  async function handleCreateEvent() {
    // console.log(formData)
    // remove default reloading page
    await createEvent(formData as Event);
    navigate("/");
  }

  async function handleDeletePost() {
    // back to Home
    await deleteEvent(String(id));
    navigate("/");
  }

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
      <form className="event-form" onSubmit={handleCreateEvent}>
        <Field label="Nom de l'évènement">
          <input
            name="Name"
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
      </form>
    </>
  );
};

export default EditEvent;
